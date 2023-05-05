import React, { useState } from 'react';
import { Button } from 'antd';
import {
  UpSquareOutlined,
  DownSquareOutlined,
  RightOutlined,
} from '@ant-design/icons';
import classnames from 'classnames';
import './style.less';

const Calendar = () => {
  const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  const months = [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ];
  const rows = [1, 2, 3, 4, 5, 6];
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [selected, setSelected] = useState([]);
  //获取当前月份的天数
  const getDays = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  //获取当前月份的第一天是星期几
  const getFirstDay = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  //获取当前月份的第一天是星期几，然后根据这个值来判断上个月的日期需要显示几天
  const firstDayOfWeek = getFirstDay(year, month);

  //获取上个月的月份
  const prevMonth = month === 0 ? 11 : month - 1;
  //获取上个月的年份
  const prevYear = prevMonth === 11 ? year - 1 : year;
  //获取上个月的天数
  const prevMonthDays = getDays(prevYear, prevMonth);
  //获取上个月需要显示的天数
  const prevMonthDaysShown = [...Array(firstDayOfWeek).keys()].map((i) => {
    return {
      value: prevMonthDays - firstDayOfWeek + i + 1,
      type: 'prev',
    };
  });

  //获取下个月的月份
  const nextMonth = month === 11 ? 0 : month + 1;
  //获取下个月的年份
  const nextYear = nextMonth === 0 ? year + 1 : year;
  //获取下个月需要显示的天数
  const nextMonthDaysShown = [
    ...Array(42 - getDays(year, month) - firstDayOfWeek).keys(),
  ].map((i) => {
    return {
      value: i + 1,
      type: 'next',
    };
  });

  //获取当前月份的所有天数
  const arr = [...Array(getDays(year, month)).keys()].map((i) => {
    return {
      value: i + 1,
      type: 'current',
    };
  });
  //总共需要显示的天数
  const totalDays = [...prevMonthDaysShown, ...arr, ...nextMonthDaysShown];
  return (
    <div className="calendar">
      <div className="header">
        <Button
          onClick={() => {
            setMonth(prevMonth);
            setYear(prevYear);
          }}>
          <UpSquareOutlined />
        </Button>
        <span
          style={{
            margin: '0 24px',
          }}>{`${year} ${months[month]}`}</span>
        <Button
          onClick={() => {
            setMonth(nextMonth);
            setYear(nextYear);
          }}>
          <DownSquareOutlined />
        </Button>
      </div>
      <div className="content">
        <div className="collapse">
          <div></div>
          <div>
            {rows.map((item) => {
              return (
                <div
                  className={classnames({
                    activeIcon:
                      !selected.includes(item) && selected.length != 0,
                  })}
                  onClick={() => {
                    selected.includes(item)
                      ? setSelected([])
                      : setSelected([item]);
                  }}>
                  <RightOutlined
                    style={{
                      transitionProperty: 'transform',
                      transitionDuration: '0.2s',
                      transform: selected.includes(item)
                        ? 'rotate(90deg)'
                        : 'rotate(0deg)',
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="days">
          <div className="days-weekdays">
            {weekdays.map((weekday, i) => (
              <div className="day-of-week" key={i}>
                {weekday}
              </div>
            ))}
          </div>
          <div className="days-content">
            {rows.map((item) => {
              return (
                <div
                  className={classnames({
                    'days-group': true,
                    activeGroup:
                      !selected.includes(item) && selected.length != 0,
                  })}>
                  {totalDays
                    .filter((it, index) => {
                      return index >= (item - 1) * 7 && index < item * 7;
                    })
                    .map((i) => {
                      return (
                        <div
                          className={classnames({
                            day: true,
                            extraDay: i.type !== 'current',
                          })}>
                          {i.value}
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

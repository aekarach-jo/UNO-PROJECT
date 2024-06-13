/* eslint-disable camelcase */
import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import th from 'date-fns/locale/th';
import 'react-datepicker/dist/react-datepicker.css';

const DatepickerLocale = () => {
  const [startDate, setStartDate] = useState(null);
  registerLocale('th', th);
  return <DatePicker className="form-control" locale={th} selected={startDate} onChange={(date) => setStartDate(date)} />;
};

export default DatepickerLocale;

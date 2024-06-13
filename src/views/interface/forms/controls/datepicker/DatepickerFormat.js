import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
import DatePicker, { registerLocale } from 'react-datepicker';
import TH from 'date-fns/locale/th';
import 'react-datepicker/dist/react-datepicker.css';

const DatepickerFormat = () => {
  registerLocale('TH', TH);
  const [startDate, setStartDate] = useState(null);
  return <DatePicker locale={TH} className="form-control" dateFormat="dd.MM.yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />;
};

export default DatepickerFormat;

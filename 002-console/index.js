#!/usr/bin/env node
const yargs = require('yargs');

const getCurrentDate = () => new Date().toISOString();

const getCurrentYear = () => new Date().getFullYear();

const getCurrentMonth = () => new Date().getMonth() + 1; // Месяцы начинаются с 0

const getCurrentDay = () => new Date().getDate();

const manipulateDate = (days = 0, months = 0, years = 0) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  date.setMonth(date.getMonth() + months);
  date.setFullYear(date.getFullYear() + years);
  return date.toISOString();
};

yargs.command({
  command: 'current',
  describe: 'Get the current date and time',
  builder: {
    year: {
      describe: 'Show the current year',
      type: 'boolean'
    },
    month: {
      describe: 'Show the current month',
      type: 'boolean'
    },
    date: {
      describe: 'Show the current date',
      type: 'boolean'
    }
  },
  handler(argv) {
    if (argv.year) {
      console.log(getCurrentYear());
    } else if (argv.month) {
      console.log(getCurrentMonth());
    } else if (argv.date) {
      console.log(getCurrentDay());
    } else {
      console.log(getCurrentDate());
    }
  }
})
.command({
  command: 'add',
  describe: 'Add to the current date',
  builder: {
    days: {
      describe: 'Number of days to add',
      type: 'number',
      default: 0
    },
    months: {
      describe: 'Number of months to add',
      type: 'number',
      default: 0
    },
    years: {
      describe: 'Number of years to add',
      type: 'number',
      default: 0
    }
  },
  handler(argv) {
    console.log(manipulateDate(argv.days, argv.months, argv.years));
  }
})
.command({
  command: 'sub',
  describe: 'Subtract from the current date',
  builder: {
    days: {
      describe: 'Number of days to subtract',
      type: 'number',
      default: 0
    },
    months: {
      describe: 'Number of months to subtract',
      type: 'number',
      default: 0
    },
    years: {
      describe: 'Number of years to subtract',
      type: 'number',
      default: 0
    }
  },
  handler(argv) {
    console.log(manipulateDate(-argv.days, -argv.months, -argv.years));
  }
})
.argv;

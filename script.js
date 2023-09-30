const data = ['Иван', 'Иванов', 'Отдел разработки', 'Программист', 2000];

function rest([name, surname, department, position, ...rest]) {
  console.log(name, surname, department, position, ...rest);
}

rest(data);

function des([name, surname, info]) {
  console.log(name, surname, info);
}

des(data);

const data3 = ['Иван', 'Иванов', 'Отдел разработки'];
function def([name, surname, department, position = 'Junior']) {
  console.log(name, surname, department, position);
}

def(data3);

const data2 = {
  color: 'red',
  width: 400,
  height: 500
};

function col({ color, width, height }) {
  console.log(color, width, height);
}

col(data2);
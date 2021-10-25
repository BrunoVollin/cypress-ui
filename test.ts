const getId = () => {
  const date = new Date();
  const id = `${date.getHours()}, ${date.getMinutes()}, ${date.getSeconds()}, ${date.getMilliseconds()}`;
  return id;
};

for (let index = 0; index < 10; index++) {
  console.log(getId());
}

const addition =  (a, b) => {
    return a + b;
}
export default addition

const close = () => {
  for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 5000);
  }
};

close()
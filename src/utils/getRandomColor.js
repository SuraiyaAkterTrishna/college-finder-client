export default function getRandomColor(){
    const hexArray = '0123456789abcdef'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexArray[Math.floor(Math.random() * 16)];
    }
    return color;
  }
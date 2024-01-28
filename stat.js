//create descriptive statistics class
class MyDescriptiveStatistics {
  constructor(data) {
    this.data = data;
  }
  // method/function to calculate the mean (average)
  calcMean() {
    const sum = this.data.reduce((acc, value) => acc + value, 0);
    return sum / this.data.length;
  }

  // method/function to calculate the median (middle value)
  calculateMedian() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
      return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
    } else {
      return sortedData[middleIndex];
    }
    }
    
    
}    
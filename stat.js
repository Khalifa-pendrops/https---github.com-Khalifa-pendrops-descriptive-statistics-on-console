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
  calcMedian() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
      return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
    } else {
      return sortedData[middleIndex];
    }
  }

  // method/function to calculate the mode (most frequent value)
  calcMode() {
    const frequencyMap = {};
    this.data.forEach((value) => {
      frequencyMap[value] = (frequencyMap[value] || 0) + 1;
    });

    let mode;
    let maxFrequency = 0;

    for (const value in frequencyMap) {
      if (frequencyMap[value] > maxFrequency) {
        mode = Number(value);
        maxFrequency = frequencyMap[value];
      }
    }

    return mode;
  }

  // Function to calculate the range (difference between max and min)
  calculateRange() {
    const max = Math.max(...this.data);
    const min = Math.min(...this.data);
    return max - min;
  }

  // method/function to calculate the variance
  calculateVariance() {
    const mean = this.calculateMean();
    const squaredDifferences = this.data.map((value) =>
      Math.pow(value - mean, 2)
    );
    const sumSquaredDifferences = squaredDifferences.reduce(
      (acc, value) => acc + value,
      0
    );
    return sumSquaredDifferences / this.data.length;
  }

  // method/function to calculate the standard deviation
  calculateStandardDeviation() {
    return Math.sqrt(this.calculateVariance());
    }
    
    

}    
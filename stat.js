// create descriptive statistics class
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
  calcRange() {
    const max = Math.max(...this.data);
    const min = Math.min(...this.data);
    return max - min;
  }

  // method/function to calculate the variance
  calcVariance() {
    const mean = this.calcMean();
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
  calcStandardDeviation() {
    return Math.sqrt(this.calcVariance());
  }

  // method/function to calculate the mean deviation
  calcMeanDeviation() {
    const mean = this.calcMean(); // Fix method name here
    const stdDev = this.calcStandardDeviation();
    const cubedDifferences = this.data.map((value) =>
      Math.pow((value - mean) / stdDev, 3)
    );
    const sumCubedDifferences = cubedDifferences.reduce(
      (acc, value) => acc + value,
      0
    );
    return sumCubedDifferences / this.data.length;
  }

  // method/function to calculate the quartile deviation
  calcQuartileDeviation() {
    const mean = this.calcMean(); // Fix method name here
    const stdDev = this.calcStandardDeviation();
    const fourthPowerDifferences = this.data.map((value) =>
      Math.pow((value - mean) / stdDev, 4)
    );
    const sumFourthPowerDifferences = fourthPowerDifferences.reduce(
      (acc, value) => acc + value,
      0
    );
    return sumFourthPowerDifferences / this.data.length;
  }
}

// array of data
const data = [11, 22, 29, 33, 40, 40, 40, 75];
// instantiated object
const stats = new MyDescriptiveStatistics(data);

// To print the result of descriptive statistics calculated
console.log("Mean:", stats.calcMean());
console.log("Median:", stats.calcMedian());
console.log("Mode:", stats.calcMode());
console.log("Range:", stats.calcRange());
console.log("Variance:", stats.calcVariance());
console.log("Standard Deviation:", stats.calcStandardDeviation());
console.log("Mean Deviation:", stats.calcMeanDeviation());
console.log("Quartile Deviation:", stats.calcQuartileDeviation());

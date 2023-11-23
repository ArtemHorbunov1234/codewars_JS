function getGrade(s1, s2, s3) {
    let count = (s1 + s2 + s3) / 3;
    count = Math.floor(count);
    if (count <= 100 && count >= 90) {
        return 'A';
    } else if (count < 90 && count >= 80) {
        return 'B';
    } else if (count < 80 && count >= 70) {
        return 'C';
    } else if (count < 70 && count >= 60) {
        return 'D';
    } else if (count < 60 && count >= 0) {
        return 'F';
    }
}

console.log(getGrade(95, 90, 93));

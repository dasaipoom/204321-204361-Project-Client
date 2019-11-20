// pare does this function
export function GradeAvg(arr): string {
  let TotalCredit = 0;
  let TotalPoint = 0;
  for (let i in arr) {
    // console.log(arr[i].CourseCredit+" "+arr[i].Grade);
    if (arr[i].Grade === "A") {
      TotalCredit += arr[i].CourseCredit;
      let point = arr[i].CourseCredit * 4.0;
      TotalPoint += point;
    } else if (arr[i].Grade === "B+") {
      TotalCredit += arr[i].CourseCredit;
      let point = arr[i].CourseCredit * 3.5;
      TotalPoint += point;
    } else if (arr[i].Grade === "B") {
      TotalCredit += arr[i].CourseCredit;
      let point = arr[i].CourseCredit * 3.0;
      TotalPoint += point;
    } else if (arr[i].Grade === "C+") {
      TotalCredit += arr[i].CourseCredit;
      let point = arr[i].CourseCredit * 2.5;
      TotalPoint += point;
    } else if (arr[i].Grade === "C") {
      TotalCredit += arr[i].CourseCredit;
      let point = arr[i].CourseCredit * 2.0;
      TotalPoint += point;
    } else if (arr[i].Grade === "D+") {
      TotalCredit += arr[i].CourseCredit;
      let point = arr[i].CourseCredit * 1.5;
      TotalPoint += point;
    } else if (arr[i].Grade === "D") {
      TotalCredit += arr[i].CourseCredit;
      let point = arr[i].CourseCredit * 1.0;
      TotalPoint += point;
    } else if (arr[i].Grade === "F") {
      TotalCredit += arr[i].CourseCredit;
      let point = arr[i].CourseCredit * 0.0;
      TotalPoint += point;
    } else if (arr[i].Grade === "W" || arr[i].Grade === null) {
      continue;
    }
  }
  let Avg = TotalPoint / (TotalCredit ? TotalCredit : 1);
  return Avg.toFixed(2);
}

export function sumCre(arr): number {
  let credit = 0;
  arr.forEach(element => {
    if (
      element.Grade !== "W" &&
      element.Grade !== "U" &&
      element.Grade !== "V" &&
      element.Grade !== null &&
      element.Grade !== ""
    )
      credit += element.CourseCredit;
  });
  return credit;
}

export function dateChat(time) {
  let d = new Date();
  d.setHours(0, 0, 0);
  const t = new Date(time);
  if (d.getTime() < time)
    return (
      t
        .getHours()
        .toString()
        .padStart(2, "0") +
      ":" +
      t
        .getMinutes()
        .toString()
        .padStart(2, "0")
    );
  return (
    t.getDate() +
    "/" +
    t.getMonth() +
    "/" +
    t
      .getFullYear()
      .toString()
      .slice(2, 4) +
    " " +
    t
      .getHours()
      .toString()
      .padStart(2, "0") +
    ":" +
    t
      .getMinutes()
      .toString()
      .padStart(2, "0")
  );
}

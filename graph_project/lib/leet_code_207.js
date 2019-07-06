// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/


function buildGraph(list) {
  let graph = {};
  list.forEach((prereq) => {
    let [course, pre] = prereq.map(String);
    if (course in graph) {
      graph[course].push(pre);
    } else {
      graph[course] = [pre];
    }
    if (!(pre in graph)) {
      graph[pre] = [];
    }
  });
  return graph;
}

function canFinish(numCourses, prerequisites) {
  let prereq = buildGraph(prerequisites);
  let totalCourses = Object.keys(prereq).length;
  let completed = new Set();

  let eligibleCourse = true;

  while (eligibleCourse) {
    eligibleCourse = false;
    for (let course in prereq) {
      let metReq = prereq[course].every((pre) => completed.has(pre));
      if (!completed.includes(course) && metReq) {
        completed.add(course);
        eligibleCourse = true;
      }
    }
  }
  return completed.length === totalCourses;
}


canFinish(2, [[1,0]]);
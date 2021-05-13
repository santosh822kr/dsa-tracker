const moment = require('moment')

module.exports = {
  formatDate: function (date, format) {
    return moment(date).utc().format(format)
  },
  editIcon: function (notSolvedName, solvedProblems) {
      var count = 0;
      //console.log(notSolvedLink.toString());
    for (var i = 0; i < solvedProblems.length; i++) {
        //text += cars[i] + "<br>";
        //console.log(solvedProblems[i].body.toString());
        if(notSolvedName.toString() == solvedProblems[i].title.toString()) {
            count = 1;
            break;
        }
    }
    if(count == 1) {
        return '<h5>Done</h5>'
    } else {
        return '<a href="/savedproblems/add" target="_blank" class="btn btn-success">ToDo</a>'
    }
  },
}

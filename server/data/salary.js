const salary = [
    { emp_no: 1, salary: 116222, from_date: '2013-9-7', to_date: '2020-9-7' },
    { emp_no: 2, salary: 50553, from_date: '2012-3-21', to_date: '2020-3-21' },
    { emp_no: 3, salary: 81233, from_date: '2014-4-29', to_date: '2020-4-29' },
    { emp_no: 4, salary: 65555, from_date: '2010-1-2', to_date: '2020-1-2' },
    { emp_no: 5, salary: 100568, from_date: '2010-11-3', to_date: '2020-11-3' },
    { emp_no: 6, salary: 41479, from_date: '2016-7-28', to_date: '2020-7-28' },
    { emp_no: 7, salary: 43153, from_date: '2011-10-16', to_date: '2020-10-16' },
    { emp_no: 8, salary: 33480, from_date: '2010-8-23', to_date: '2020-8-23' },
    { emp_no: 9, salary: 36813, from_date: '2010-1-22', to_date: '2020-1-22' },
    { emp_no: 10, salary: 120800, from_date: '2014-8-11', to_date: '2020-8-11' },
    { emp_no: 11, salary: 125281, from_date: '2013-1-29', to_date: '2020-1-29' },
    { emp_no: 12, salary: 65682, from_date: '2014-7-28', to_date: '2020-7-28' },
    { emp_no: 13, salary: 51469, from_date: '2017-5-7', to_date: '2020-5-7' },
    { emp_no: 14, salary: 80090, from_date: '2013-7-29', to_date: '2020-7-29' },
    { emp_no: 15, salary: 79576, from_date: '2015-7-16', to_date: '2020-7-16' },
    { emp_no: 16, salary: 36229, from_date: '2015-3-15', to_date: '2020-3-15' },
    { emp_no: 17, salary: 127368, from_date: '2014-4-28', to_date: '2020-4-28' },
    { emp_no: 18, salary: 103908, from_date: '2013-7-22', to_date: '2020-7-22' },
    { emp_no: 19, salary: 77828, from_date: '2011-7-2', to_date: '2020-7-2' },
    { emp_no: 20, salary: 59312, from_date: '2012-11-26', to_date: '2020-11-26' },
    { emp_no: 21, salary: 41557, from_date: '2012-8-19', to_date: '2020-8-19' },
    { emp_no: 22, salary: 39779, from_date: '2014-5-28', to_date: '2020-5-28' },
    { emp_no: 23, salary: 32405, from_date: '2012-7-18', to_date: '2020-7-18' },
    { emp_no: 24, salary: 90217, from_date: '2015-11-6', to_date: '2020-11-6' },
    { emp_no: 25, salary: 49148, from_date: '2012-12-4', to_date: '2020-12-4' },
    { emp_no: 26, salary: 62048, from_date: '2013-5-13', to_date: '2020-5-13' },
    { emp_no: 27, salary: 63474, from_date: '2017-3-2', to_date: '2020-3-2' },
    { emp_no: 28, salary: 56852, from_date: '2014-5-7', to_date: '2020-5-7' },
    { emp_no: 29, salary: 102106, from_date: '2017-9-7', to_date: '2020-9-7' },
    { emp_no: 30, salary: 45173, from_date: '2011-4-26', to_date: '2020-4-26' },
    { emp_no: 31, salary: 43353, from_date: '2011-8-28', to_date: '2020-8-28' },
    { emp_no: 32, salary: 31674, from_date: '2013-9-13', to_date: '2020-9-13' },
    { emp_no: 33, salary: 40973, from_date: '2016-11-20', to_date: '2020-11-20' },
    { emp_no: 34, salary: 89093, from_date: '2014-6-29', to_date: '2020-6-29' },
    { emp_no: 35, salary: 108077, from_date: '2012-6-11', to_date: '2020-6-11' },
    { emp_no: 36, salary: 113516, from_date: '2010-6-12', to_date: '2020-6-12' },
    { emp_no: 37, salary: 50467, from_date: '2014-3-25', to_date: '2020-3-25' },
    { emp_no: 38, salary: 87538, from_date: '2010-10-16', to_date: '2020-10-16' },
    { emp_no: 39, salary: 55633, from_date: '2011-8-7', to_date: '2020-8-7' },
    { emp_no: 40, salary: 72223, from_date: '2011-8-12', to_date: '2020-8-12' },
    { emp_no: 41, salary: 56832, from_date: '2010-10-13', to_date: '2020-10-13' },
    { emp_no: 42, salary: 44134, from_date: '2013-7-24', to_date: '2020-7-24' },
    { emp_no: 43, salary: 38541, from_date: '2016-7-23', to_date: '2020-7-23' },
    { emp_no: 44, salary: 56620, from_date: '2010-8-18', to_date: '2020-8-18' },
    { emp_no: 45, salary: 50287, from_date: '2013-12-24', to_date: '2020-12-24' },
    { emp_no: 46, salary: 33837, from_date: '2015-4-27', to_date: '2020-4-27' },
    { emp_no: 47, salary: 70295, from_date: '2017-10-2', to_date: '2020-10-2' },
    { emp_no: 48, salary: 40297, from_date: '2012-2-20', to_date: '2020-2-20' },
    { emp_no: 49, salary: 38729, from_date: '2010-10-23', to_date: '2020-10-23' },
    { emp_no: 50, salary: 95661, from_date: '2010-12-7', to_date: '2020-12-7' },
    { emp_no: 51, salary: 48811, from_date: '2014-1-1', to_date: '2020-1-1' },
    { emp_no: 52, salary: 39659, from_date: '2015-3-27', to_date: '2020-3-27' },
    { emp_no: 53, salary: 125336, from_date: '2012-7-6', to_date: '2020-7-6' },
    { emp_no: 54, salary: 55679, from_date: '2017-10-26', to_date: '2020-10-26' },
    { emp_no: 55, salary: 121538, from_date: '2016-8-21', to_date: '2020-8-21' },
    { emp_no: 56, salary: 85214, from_date: '2011-2-11', to_date: '2020-2-11' },
    { emp_no: 57, salary: 33200, from_date: '2014-6-13', to_date: '2020-6-13' },
    { emp_no: 58, salary: 112509, from_date: '2017-3-28', to_date: '2020-3-28' },
    { emp_no: 59, salary: 69578, from_date: '2013-12-15', to_date: '2020-12-15' },
    { emp_no: 60, salary: 85857, from_date: '2011-5-6', to_date: '2020-5-6' },
    { emp_no: 61, salary: 87136, from_date: '2010-6-6', to_date: '2020-6-6' },
    { emp_no: 62, salary: 128687, from_date: '2013-2-25', to_date: '2020-2-25' },
    { emp_no: 63, salary: 32000, from_date: '2011-11-25', to_date: '2020-11-25' },
    { emp_no: 64, salary: 41103, from_date: '2016-2-24', to_date: '2020-2-24' },
    { emp_no: 65, salary: 56667, from_date: '2016-11-16', to_date: '2020-11-16' },
    { emp_no: 66, salary: 50224, from_date: '2015-10-3', to_date: '2020-10-3' },
    { emp_no: 67, salary: 50243, from_date: '2010-10-2', to_date: '2020-10-2' },
    { emp_no: 68, salary: 103179, from_date: '2010-3-14', to_date: '2020-3-14' },
    { emp_no: 69, salary: 41901, from_date: '2012-11-28', to_date: '2020-11-28' },
    { emp_no: 70, salary: 35913, from_date: '2017-9-15', to_date: '2020-9-15' },
    { emp_no: 71, salary: 34281, from_date: '2017-12-28', to_date: '2020-12-28' },
    { emp_no: 72, salary: 55563, from_date: '2014-4-25', to_date: '2020-4-25' },
    { emp_no: 73, salary: 34451, from_date: '2016-9-15', to_date: '2020-9-15' },
    { emp_no: 74, salary: 68741, from_date: '2015-7-26', to_date: '2020-7-26' },
    { emp_no: 75, salary: 112704, from_date: '2016-3-6', to_date: '2020-3-6' },
    { emp_no: 76, salary: 42830, from_date: '2014-12-27', to_date: '2020-12-27' },
    { emp_no: 77, salary: 59778, from_date: '2011-5-25', to_date: '2020-5-25' },
    { emp_no: 78, salary: 36464, from_date: '2014-6-26', to_date: '2020-6-26' },
    { emp_no: 79, salary: 31433, from_date: '2014-7-20', to_date: '2020-7-20' },
    { emp_no: 80, salary: 74229, from_date: '2012-1-21', to_date: '2020-1-21' },
    { emp_no: 81, salary: 33072, from_date: '2014-9-14', to_date: '2020-9-14' },
    { emp_no: 82, salary: 58074, from_date: '2010-5-5', to_date: '2020-5-5' },
    { emp_no: 83, salary: 46123, from_date: '2015-12-13', to_date: '2020-12-13' },
    { emp_no: 84, salary: 30160, from_date: '2015-1-27', to_date: '2020-1-27' },
    { emp_no: 85, salary: 83160, from_date: '2012-8-6', to_date: '2020-8-6' },
    { emp_no: 86, salary: 113997, from_date: '2011-11-6', to_date: '2020-11-6' },
    { emp_no: 87, salary: 75031, from_date: '2016-10-9', to_date: '2020-10-9' },
    { emp_no: 88, salary: 55695, from_date: '2016-12-12', to_date: '2020-12-12' },
    { emp_no: 89, salary: 93771, from_date: '2014-10-29', to_date: '2020-10-29' },
    { emp_no: 90, salary: 95690, from_date: '2013-2-1', to_date: '2020-2-1' },
    { emp_no: 91, salary: 44697, from_date: '2011-8-26', to_date: '2020-8-26' },
    { emp_no: 92, salary: 90662, from_date: '2014-4-14', to_date: '2020-4-14' },
    { emp_no: 93, salary: 36193, from_date: '2012-9-12', to_date: '2020-9-12' },
    { emp_no: 94, salary: 63811, from_date: '2011-1-12', to_date: '2020-1-12' },
    { emp_no: 95, salary: 59818, from_date: '2012-5-7', to_date: '2020-5-7' },
    { emp_no: 96, salary: 92281, from_date: '2017-4-12', to_date: '2020-4-12' },
    { emp_no: 97, salary: 33035, from_date: '2015-9-24', to_date: '2020-9-24' },
    { emp_no: 98, salary: 56715, from_date: '2012-6-17', to_date: '2020-6-17' },
    { emp_no: 99, salary: 50702, from_date: '2012-12-20', to_date: '2020-12-20' },
    { emp_no: 100, salary: 52020, from_date: '2011-5-21', to_date: '2020-5-21' }
]

module.exports = salary
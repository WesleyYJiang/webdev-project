let _singleton = Symbol();
const BIll_API_URL = 'https://openstates.org/api/v1/bills/?';
const API_KEY = '1621204a-000f-4383-a9dd-f1189be42fc0';

class BillService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new CourseService(_singleton);
        return this[_singleton]
    }

    findBillbyContent() {
        return fetch(COURSE_API_URL).then(function (response)
        {
            return response.json();
        });
    }

    findCourseById(courseId) {
        return fetch(`${COURSE_API_URL}/${courseId}`)
            .then(function (response) {
                return response.json();
            })
    }
}
export default BillService;

import { ActionConstants } from "../helpers/constants/constants";


const initialState = {
    selectedTab: 0,
    isLoading: false,
    plannedReleases: [],
    pastReleases: [],
    sideArray: [true],
    projectFilterField: [
        {
            id: 1,
            label: 'Super project',
            checked: false
        },
        {
            id: 2,
            label: 'Slow project',
            checked: false
        },
        {
            id: 3,
            label: 'Fast project',
            checked: false
        }
    ],
    subscribedProjectsFilterField: [
        {
            id: 1,
            label: 'Super project',
            checked: false
        },
        {
            id: 2,
            label: 'Slow project',
            checked: false
        },
        {
            id: 3,
            label: 'Fast project',
            checked: false
        }
    ],
    searchFilterField: '',
};

const calculateSide = (i, events) => {
    if (i === 0) {
        return true;
    }
    else {
        var previousEventDate = events[i - 1].releaseDate;
        var currentEventDate = events[i].releaseDate;

        var current = new Date(currentEventDate).getDate();
        var previous = new Date(previousEventDate).getDate();

        if (current === previous) {
            var val = someArray.slice(-1)[0];
            return val;
        }
        else {
            const lastArrayValue = someArray.slice(-1)[0];
            const changedSideValue = !lastArrayValue;
            someArray.push(changedSideValue);
            return changedSideValue;
        }
    }
};

let someArray = [true];

const calculateIsDateRow = (i, events) => {
    if (i === 0) {
        var element = events[i];
        return formatDate(element.releaseDate);
    }
    else {
        var previousEventDate = events[i - 1].releaseDate;
        var currentEventDate = events[i].releaseDate;

        var current = new Date(currentEventDate).getDate();
        var previous = new Date(previousEventDate).getDate();

        if (current === previous) {
            return '';
        }
        else {
            var element = events[i];
            return formatDate(element.releaseDate);
        }
    }
};

const formatDate = date => {
    var dateObject = new Date(date);
    var month = dateObject.getMonth() + 1;
    var day = dateObject.getDate();
    var monthName = day.toString();
    switch (month) {
        case 1:
            monthName += ' Jan.';
            break;
        case 2:
            monthName += ' Feb.';
            break;
        case 3:
            monthName += ' Mar.';
            break;
        case 4:
            monthName += ' Apr.';
            break;
        case 5:
            monthName += ' May';
            break;
        case 6:
            monthName += ' Jun.';
            break;
        case 7:
            monthName += ' Jul.';
            break;
        case 8:
            monthName += ' Aug.';
            break;
        case 9:
            monthName += ' Sep.';
            break;
        case 10:
            monthName += ' Oct.';
            break;
        case 11:
            monthName += ' Nov.';
            break;
        case 12:
            monthName += ' Dec.';
            break;
        default:
            break;
    }
    return monthName;
}

export default function TimeLinePageReducer(state = initialState, action) {
    switch (action.type) {
        case ActionConstants.TIMELINEPAGE_TAB_CHAGED:
            {
                return { ...state, selectedTab: action.payload }
            }
        case ActionConstants.TIMELINEPAGE_ISLOADING:
            {
                return { ...state, isLoading: action.payload }
            }
        case ActionConstants.TIMELINEPAGE_RECIEVE_DATA:
            {
                var uiData = [];
                someArray = [true];
                for (let index = 0; index < action.payload.length; index++) {

                    var dataRowValue = calculateIsDateRow(index, action.payload);
                    if (dataRowValue) {
                        var firstDateItem = {
                            releaseDate: '',
                            projectName: '',
                            releaseVersion: '',
                            description: '',
                            isLeftSide: '',
                            isDateRow: dataRowValue,
                        };
                        uiData.push(firstDateItem);
                    }

                    const element = action.payload[index];
                    var item = {
                        releaseDate: element.releaseDate,
                        projectName: element.projectName,
                        releaseVersion: element.releaseVersion,
                        description: element.description,
                        isLeftSide: calculateSide(index, action.payload),
                        isDateRow: '',
                        teamLead: element.teamLead,
                    };

                    uiData.push(item);
                }
                return { ...state, plannedReleases: uiData, isLoading: false }
            }
        case ActionConstants.TIMELINEPAGE_RECIEVE_PAST_DATA:
            {
                var someData = [];
                someArray = [true];
                for (let index = 0; index < action.payload.length; index++) {

                    var dataRowValue = calculateIsDateRow(index, action.payload);
                    if (dataRowValue) {
                        var firstDateItem = {
                            releaseDate: '',
                            projectName: '',
                            releaseVersion: '',
                            description: '',
                            isLeftSide: '',
                            isDateRow: dataRowValue,
                        };
                        someData.push(firstDateItem);
                    }

                    const element = action.payload[index];
                    var item = {
                        releaseDate: element.releaseDate,
                        projectName: element.projectName,
                        releaseVersion: element.releaseVersion,
                        description: element.description,
                        isLeftSide: calculateSide(index, action.payload),
                        isDateRow: '',
                        teamLead: element.teamLead,
                    };

                    someData.push(item);
                }
                return { ...state, pastReleases: someData, isLoading: false }
            }
        case ActionConstants.TIMELINEPAGE_PROJECT_FILTER_CHANGED:
            {
                return {
                    ...state,
                    projectFilterField: state.projectFilterField.map(field => {
                        if (field.label === action.payload.target.value.toString()) {
                            var updated = { ...field, checked: !field.checked };
                            return updated;
                        }
                        else {
                            return field;
                        }
                    }
                    )
                };
            }
        case ActionConstants.TIMELINEPAGE_SUBSCRIBED_PROJECT_FILTER_CHANGED:
            {
                return {
                    ...state,
                    subscribedProjectsFilterField: state.subscribedProjectsFilterField.map(field => {
                        if (field.label === action.payload.target.value.toString()) {
                            var updated = { ...field, checked: !field.checked };
                            return updated;
                        }
                        else {
                            return field;
                        }
                    }
                    )
                };
            }
        case ActionConstants.TIMELINEPAGE_SEARCH_FILTER_CHANGED:
            {
                return { ...state, searchFilterField: action.payload }
            }
        case ActionConstants.TIMELINEPAGE_SIDES_CHANGED:
            {
                return { ...state, sideArray: action.payload }
            }
        default:
            return state;
    }
}



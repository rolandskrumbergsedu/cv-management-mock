import { ActionConstants, ApiPaths } from "../helpers/constants/constants";

export function timeLineTabChanged(value) {
    return {
        type: ActionConstants.TIMELINEPAGE_TAB_CHAGED,
        payload: value
    }
}

export function TimeLineDataLoading(value) {
    return {
        type: ActionConstants.TIMELINEPAGE_ISLOADING,
        payload: value
    }
}

export function TimeLineDataReceive(value) {
    return {
        type: ActionConstants.TIMELINEPAGE_RECIEVE_DATA,
        payload: value
    }
}

export function PastTimeLineDataReceive(value) {
    return {
        type: ActionConstants.TIMELINEPAGE_RECIEVE_PAST_DATA,
        payload: value
    }
}

export function timeLineProjectFilterChanged(value) {
    return {
        type: ActionConstants.TIMELINEPAGE_PROJECT_FILTER_CHANGED,
        payload: value
    }
}

export function timeLineSubscribedProjectFilterChanged(value) {
    return {
        type: ActionConstants.TIMELINEPAGE_SUBSCRIBED_PROJECT_FILTER_CHANGED,
        payload: value
    }
}

export function timeLineSearchFilterChanged(value) {
    return {
        type: ActionConstants.TIMELINEPAGE_SEARCH_FILTER_CHANGED,
        payload: value
    }
}

export function timelineSidesChanged(value) {
    return {
        type: ActionConstants.TIMELINEPAGE_SIDES_CHANGED,
        payload: value
    }
}

export function GetTimeLineData() {
    return async dispatch => {
        try {
            dispatch(TimeLineDataLoading(true));
            const response = await fetch(ApiPaths.BasePath + ApiPaths.Team);
            var responseBody = await response.json();
            dispatch(TimeLineDataReceive(responseBody));
        } catch (err) {
            console.log('Ohh no:', err.message);
            dispatch(TimeLineDataLoading(false));
        }
    }
}

export function GetPastTimeLineData() {
    return async dispatch => {
        try {
            dispatch(TimeLineDataLoading(true));
            const response = await fetch(ApiPaths.BasePath + ApiPaths.PastPath);
            var responseBody = await response.json();
            dispatch(PastTimeLineDataReceive(responseBody));
        } catch (err) {
            console.log('Ohh no:', err.message);
            dispatch(TimeLineDataLoading(false));
        }
    }
}

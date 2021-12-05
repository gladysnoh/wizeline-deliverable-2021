import moment from 'moment';

export class TaskUtils {

    static DATA_DAY_ID_FORMAT = 'YYYY-MM-DD';

    static getTodayDataDayListId() {
        return moment().format(TaskUtils.DATA_DAY_ID_FORMAT);
    }

    static getTomorrowDataDayListId() {
        return moment().add(1, 'day').format(TaskUtils.DATA_DAY_ID_FORMAT);
    }

}

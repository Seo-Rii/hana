import { JudgeRequest, JudgeSourceType, JudgeType } from '../../types/request'
import { execute, getLimitString } from '../util'
import commonJudge from '../common'

export function judge(data: JudgeRequest) {
    return commonJudge(
        data,
        (path) =>
            execute(
                `root`,
                getLimitString(
                    { cpuLimit: 50 },
                    `ls;kotlinc-native -o Main -opt Main.kt`
                ),
                { cwd: path }
            ),
        (path) => path + '/Main'
    )
}

export function getLanguage() {
    return JudgeSourceType.KOTLIN
}

export function getSupportedType() {
    return [JudgeType.CommonJudge, JudgeType.Interactive]
}

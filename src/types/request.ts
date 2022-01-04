export const enum WebSocketRequestType {
    JUDGE_INFO = 'JUDGE_INFO',
    JUDGE_STATUS = 'JUDGE_STATUS',
}

export interface WebSocketRequest {
    type: WebSocketRequestType
    data?: any
}

export const enum ScoringType {
    PROPORTIONAL = 'PROPORTIONAL',
    QUANTIZED = 'QUANTIZED',
}

export const enum JudgeType {
    CommonJudge = 'CommonJudge',
    OutputOnly = 'OutputOnly',
    Interactive = 'Interactive',
    COMPETITIVE = 'COMPETITIVE',
}

export const enum JudgeSourceType {
    TEXT = 'TEXT',
    C = 'C',
    CPP = 'CPP',
    PYTHON3 = 'PYTHON3',
    PYPY3 = 'PYPY3',
    JAVA = 'JAVA',
    JAVASCRIPT = 'JAVASCRIPT',
    TYPESCRIPT = 'TYPESCRIPT',
    GO = 'GO',
    RUST = 'RUST',
    KOTLIN = 'KOTLIN',
}

export interface SourceFile {
    name: string
    source: string
}

export interface DataSet {
    data: any
}

export interface SubTask extends DataSet {
    scoringType: ScoringType
}

export interface OutputOnly extends SubTask {
    data: {
        output: string
    }[]
}

export interface CommonDataSet extends SubTask {
    data: {
        input: string
        output: string
    }[]
}

export interface JudgeRequest<
    TJudgeType extends JudgeType = JudgeType,
    TJudgeSourceType extends JudgeSourceType = JudgeSourceType,
    TSubTask extends SubTask = SubTask
> {
    uid: string
    language: TJudgeSourceType
    judgeType: TJudgeType
    source: SourceFile[]
    dataSet: TSubTask[]
    timeLimit: number
    memoryLimit: number
}

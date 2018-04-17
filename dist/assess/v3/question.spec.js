"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_enum_1 = require("../../unfetter/stix.enum");
const question_answer_enum_1 = require("./question-answer.enum");
const question_mock_1 = require("./question.mock");
describe('assessment 3.0 question model', () => {
    let cut;
    beforeEach(() => {
        cut = question_mock_1.QuestionMockFactory.mockOne();
    });
    it('should have a constructor', () => {
        expect(cut).toBeDefined();
    });
    it('should know its own type', () => {
        expect(cut).toBeDefined();
        expect(cut.id).toContain(stix_enum_1.StixEnum.QUESTION);
        expect(cut.type).toEqual(stix_enum_1.StixEnum.QUESTION);
    });
    it('should know hold an evaluation for mitigate', () => {
        expect(cut).toBeDefined();
        cut.name = 'mitigate';
        expect(cut.name).toEqual('mitigate');
        expect(cut.score).toEqual(question_answer_enum_1.QuestionAnswerEnum.MEDIUM);
    });
    it('should know hold an evaluation for indicate', () => {
        expect(cut).toBeDefined();
        cut.name = 'indicate';
        expect(cut.name).toEqual('indicate');
        expect(cut.score).toEqual(question_answer_enum_1.QuestionAnswerEnum.MEDIUM);
    });
    it('should know hold an evaluation for respond', () => {
        expect(cut).toBeDefined();
        cut.name = 'respond';
        expect(cut.name).toEqual('respond');
        expect(cut.score).toEqual(question_answer_enum_1.QuestionAnswerEnum.MEDIUM);
    });
});

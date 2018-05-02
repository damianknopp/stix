"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_enum_1 = require("../../unfetter/stix.enum");
/**
 * @description assessment set represents many object assessments,
 *  ie answers to many capabilities vs attack attackpatterns
 * assessments set can represent state of an assessed infrastructure. ex. AsIs, ToBe, IfImplemented...
 */
class AssessmentSet {
    constructor() {
        // created by ref is a identity id
        this.created = new Date().toISOString();
        this.is_baseline = false;
        this.type = stix_enum_1.StixEnum.ASSESSMENT_SET;
    }
}
exports.AssessmentSet = AssessmentSet;

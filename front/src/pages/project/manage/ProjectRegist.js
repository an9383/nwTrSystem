import { useState } from "react";
import { TextBox } from "devextreme-react/text-box"
import { NumberBox } from "devextreme-react";
import CustomDatePicker from "../../../components/unit/CustomDatePicker";
import CustomCdComboBox from "../../../components/unit/CustomCdComboBox";
import AutoCompleteProject from "../../../components/unit/AutoCompleteProject";
import CustomComboBox from "../../../components/unit/CustomComboBox";

import ProjectRegistJson from "./ProjectRegistJson.json"
import CustomLabelValue from "../../../components/unit/CustomLabelValue"
import { useCookies } from "react-cookie";
import Button from "devextreme-react/button";

const ProjectRegist = ({props, onClick}) => {
    // console.log(props)
    const [cookies] = useCookies([]);
    const testValues = {
        "picTelno": null,
        "propseDdlnYmd": null,
        "flawMendngEndYmd": null,
        "bddprPc": null,
        "igiYmd": null,
        "picEml": null,
        "bizFlfmtTyCdNm": "주관(주사업자)",
        "bizFlfmtTyCd": "VTW01301",
        "regEmpId": null,
        "prjctId": "6e7c4011-fdbe-053c-c9a1-715eb2647b15",
        "picFlnm": null,
        "bizSttsCd": null,
        "prjctMngrEmpId": "cbe9b6a4-d00d-5ae1-1c17-417a6b479600",
        "mmnyQotaAmt": null,
        "beffatPbancDdlnYmd": null,
        "prjctStleCd": "VTW01802",
        "propsePrsntnYmd": null,
        "ctmmnyNo": null,
        "deptId": "0979bd9e-707e-4ea2-8ba7-ceefd777e4ad",
        "expectOrderYmd": null,
        "bizEndYmd": "20240229",
        "ctrtYmd": "20240101",
        "stbleEndYmd": null,
        "prjctRcvordYn": null,
        "prjctStleCdNm": "실행",
        "bizSttsCdNm": null,
        "regDt": null,
        "totBgt": null,
        "mmnySlsAm": null,
        "bddprRt": null,
        "mdfcnEmpId": null,
        "mdfcnDt": null,
        "prjctNm": "TRtest"
    }

    console.log(props);

    const {labelValue} = ProjectRegistJson;

    // console.log(labelValue)

    const [param, setParam] = useState([]);

    const handleChgState = ({name, value}) => {

        setParam({
            ...param,
            [name] : value
        })
    };
    console.log(cookies.userInfo);
    console.log(cookies.userAuth);
    console.log(param)

    return (
        <div className="popup-content">
            <div className="project-regist-content">
                <div className="project-regist-content-inner">
                    <h3>* 기본정보</h3>
                    <div className="dx-fieldset">
                        <CustomLabelValue props={labelValue.prjctNm} onSelect={handleChgState} value={testValues.prjctNm}/>
                        <div className="dx-field">
                            <div className="dx-field-label asterisk">프로젝트 형태</div>
                            <div className="dx-field-value">
                                <CustomCdComboBox
                                    param="VTW018"
                                    placeholderText="프로젝트 형태"
                                    name="prjctStleCd"
                                    onSelect={handleChgState}
                                />
                            </div>
                        </div>
                        <CustomLabelValue props={labelValue.dept} onSelect={handleChgState} value={testValues.deptId}/>
                        <CustomLabelValue props={labelValue.emp} onSelect={handleChgState} value={testValues.prjctMngrEmpId}/>
                    </div>
                </div>
                <div className="project-regist-content-inner">
                    <h3>* 예산 </h3>
                    <div className="dx-fieldset">
                        <CustomLabelValue props={labelValue.totBgt} value={testValues.deptId}/>
                        <CustomLabelValue props={labelValue.bddprPc}/>
                        <CustomLabelValue props={labelValue.mmnySlsAm}/>
                        <div className="dx-field">
                            <div className="dx-field-label asterisk">사업수행유형</div>
                            <div className="dx-field-value">
                                <CustomCdComboBox
                                    param="VTW018"
                                    placeholderText="사업수행유형"
                                    name="prjctStleCd"
                                    onSelect={handleChgState}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-regist-content">
                <div className="project-regist-content-inner">
                    <h3>* 고객정보</h3>
                    <div className="dx-fieldset">
                        <CustomLabelValue props={labelValue.ctmmnyInfo}/>
                        <CustomLabelValue props={labelValue.picFlnm}/>
                        <CustomLabelValue props={labelValue.picTelno}/>
                        <CustomLabelValue props={labelValue.picEml}/>
                    </div>
                </div>
                <div className="project-regist-content-inner">
                    <h3>* 프로젝트 일정</h3>
                    <div className="dx-fieldset">
                        <div>
                            <p>프로젝트 형태를 선택하지 않아 일정을 작성할 수 없습니다.</p>
                            <p>프로젝트를 선택해주세요.</p>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectRegist;
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`ObjectOrientedProgramming1 3.0 A+`,
`IntroductiontoComputerEngineering 3.0 A+`,
`ObjectOrientedProgramming2 3.0 A0`,
`CreativeComputerEngineeringDesign 3.0 A+`,
`AssemblyLanguage 3.0 A+`,
`InternetProgramming 3.0 B0`,
`ApplicationProgramminginJava 3.0 A0`,
`SystemProgramming 3.0 B0`,
`OperatingSystem 3.0 B0`,
`WirelessCommunicationsandNetworking 3.0 C+`,
`LogicCircuits 3.0 B0`,
`DataStructure 4.0 A+`,
`MicroprocessorApplication 3.0 B+`,
`EmbeddedSoftware 3.0 C0`,
`ComputerSecurity 3.0 D+`,
`Database 3.0 C+`,
`Algorithm 3.0 B0`,
`CapstoneDesigninCSE 3.0 B+`,
`CompilerDesign 3.0 D0`,
`ProblemSolving 4.0 P`]
let Convert = (grade) => {
    if(grade==="A+"){
        return (4.5)
    }else if(grade === "A0"){
        return (4.0)
    }else if(grade === "B+"){
        return (3.5)
    }else if(grade === "B0"){
        return (3.0)
    }else if(grade === "C+"){
        return (2.5)
    }else if(grade === "C0"){
        return (2.0)
    }else if(grade === "D+"){
        return (1.5)
    }else if(grade === "D0"){
        return (1.0)
    }else if(grade === "F"){
        return (0.0)
    }else if(grade === "P"){
        return null
    }
}
let arr = [];
for(let i=0; i<input.length; i++){
    let [subject, credit, grade] = input[i].split(' ');
    arr.push([subject, credit, grade])
}
let totalGrade = 0;
let totalCredit = 0;
for(let i=0; i<input.length; i++){
    let pGrade = Convert(arr[i][2]) * (parseInt(arr[i][1]));
    let pCredit = parseInt(arr[i][1]);
    totalGrade += pGrade;
    if(arr[i][2]!=="P"){
        totalCredit += pCredit;
    }
}
console.log((totalGrade/totalCredit).toFixed(6))
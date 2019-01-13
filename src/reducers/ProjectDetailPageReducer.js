import { ActionConstants } from "../helpers/constants/constants";


const initialState = {
    isLoading: false,
    projectName: 'Online Claims',
    teamReleases: [
        {           
            releaseVersion: 'Ver 12.132213',
            releaseDate: '01.Dec',
            description: 'Minor bug fixes for all countries.',
            note : "Changes made to Chatbot: \n \
            (ALL) Fixed a bug where chat bot would sometimes get stuck on page reload \n \
            (NO) Fixed an issue where incorrect counter claim number caused an exception \n \
            (DK) Fixed an issue where customer SSN was mismatched with customer number causing problems with SIF \n \
            (SE) Improved behavior of AC Mapping Helper, fixing Null reference error \n \
            (DK) Fixed an issue where upon editing previous answer user cars would duplicate in the list \n \
            (SE) Removed SSN sending to policy/warranty search as it is no longer used there", 
            likes : 4,
            dislikes :  0                  
        },
        {           
            releaseVersion: 'Ver 13.1231231',
            releaseDate: '20.Dec',
            description: 'Minor bug fixes for all countries, improvements on PDF handling.',
            note : "Changes made to Claims Processing: \n \
            (ALL) Fixed issue where Business Area and Line of Business was sometimes empty in DB for Claim Forms \n \
            (NO) Fixed issue where there some duplicate records in DB \n \
            (NO) Prepared script to fix past duplicate records, will deploy it shortly \n \
            (SE) Fixed issue where Commercial claims where mistakenly displayed as Private area claims in DB \n \
            (SE) Made a fix for past records, will deploy it shortly \n \
            (SE) Fixed issue where exception was thrown when policy returned that item is not covered (Error code 42) \n \
            (DK) Improved the way how claim PDFs and XMLs are saved to destination folder where they are processed further.",
            likes : 6,
            dislikes :   3         
        },
    ],
    teamMembers: [
        {
            picture: "https://eur.delve.office.com/mt/v3/people/profileimage?userId=rolands.krumbergs%40if.lv&size=L",
            name: "C",
            role: "Rolands Krumbergs | Team Lead"
        },
        {
            picture: "https://eur.delve.office.com/mt/v3/people/profileimage?userId=toms.gribusts%40if.lv&size=L",
            name: "A",
            role: "Toms Gribusts | Dev"
        },
        {
            picture: "https://eur.delve.office.com/mt/v3/people/profileimage?userId=gatis.karlevics%40if.lv&size=L",
            name: "B",
            role: "Gatis Karlevics | Dev"
        },
        {
            picture: "https://eur.delve.office.com/mt/v3/people/profileimage?userId=didzis.stivrins%40if.lv&size=L",
            name: "C",
            role: "Didzis Stivriņš | Dev"
        },
        {
            picture: "https://eur.delve.office.com/mt/v3/people/profileimage?userId=raivis.berovskis%40if.lv&size=L",
            name: "D",
            role: "Raivis Berovskis | QA"
        }
    ]
}

export default function ProjectDetailPageReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
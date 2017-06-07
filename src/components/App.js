import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from "material-ui/AppBar";
import QuestionList from './QuestionList';

export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div style={{margin: "0 auto", maxWidth: "600px"}}>
                    <AppBar title="Quiz App" />
                    <div style={{marginTop: '20px'}}>
                        <QuestionList
                            questions={getQuestions()}
                        />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

function getQuestions() {
    return [
        {
            text: 'Какой вид тигров самый крупный?',
            variants: [
                {value: 'amur', label: 'Амурский тигр'},
                {value: 'sumatrae', label: 'Суматранский тигр'},
                {value: 'indochn', label: 'Индокитайский тигр'}
            ]
        },
        {
            text: 'Какая из этих птиц умеет летать?',
            variants: [
                {value: 'kiwi', label: 'Киви'},
                {value: 'baklan', label: 'Баклан'},
                {value: 'raphinae', label: 'Дронт'},
                {value: 'pinguin', label: 'Императорский пингвин'}
            ]
        },
    ];
}

/*
export type QuestionType = {
    text: string,
    image: ?string,
    variants: Variant[],
}
*/

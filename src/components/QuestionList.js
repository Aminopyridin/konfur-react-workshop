import React from 'react';
import Question from './Question.js';
// import type { QuestionType } from './App'

// Как описать пропсы читай здесь: https://flow.org/en/docs/frameworks/react/

export default class QuestionList extends React.Component {
    render() {
        return (
            <div>
                {this.props.questions.map((item, index) =>
                    <Question
                        key={index}
                        index={index + 1}
                        image={item.image}
                        text={item.text}
                        variants={item.variants}
                    />
                )}
            </div>
        );
    }
}

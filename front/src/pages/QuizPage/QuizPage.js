import React, { useState } from 'react';

import QuizEntry from './components/QuizEntry';
import QuizEx from './components/QuizEx';

function QuizPage() {
    const [isEntry, setIsEntry] = useState(true);
    const [isQuizEx1, setIsQuizEx1] = useState(false);
    const [isQuizEx2, setIsQuizEx2] = useState(false);
    const [isQuizEx3, setIsQuizEx3] = useState(false);
    const [isQuizEx4, setIsQuizEx4] = useState(false);
    const [isQuizEx5, setIsQuizEx5] = useState(false);

	return (
		<div style={{ paddingTop: '170px' }}>
            {isEntry && (
               <QuizEntry setIsEntry={setIsEntry} setIsQuizEx1={setIsQuizEx1} />
            )}
            {isQuizEx1 && (
                <QuizEx set1={setIsQuizEx1} set2={setIsQuizEx2} text={['포켓몬 퀴즈에 온 걸 환영한다!', <br/>, '여기엔 151마리의 포켓몬이 있단다.']} />
            )}
            {isQuizEx2 && (
                <QuizEx set1={setIsQuizEx2} set2={setIsQuizEx3} text={['포켓몬의 실루엣을 보여줄테니', <br/>, '잘 보고 어떤 포켓몬인지 맞추면 된단다.']} />
            )}
            {isQuizEx3 && (
                <QuizEx set1={setIsQuizEx3} set2={setIsQuizEx4} text={['정답을 맞추면 500포인트를 받을 수 있지.']} />
            )}
            {isQuizEx4 && (
                <QuizEx set1={setIsQuizEx4} set2={setIsQuizEx5} text={['기회는 3번!', <br/>, '어려우면 힌트를 받거나 패스를 하렴.']} />
            )}
            {isQuizEx5 && (
                <QuizEx set1={setIsQuizEx5} set2={setIsEntry} text='자, 그럼 시작한다!' />
            )}
		</div>
	);
}

export default QuizPage;
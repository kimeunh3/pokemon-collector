import React from 'react';
import { useParams } from "react-router-dom";

function typeStatisticsPage() {

    const params = useParams();
    
    console.log(params.type);
	return (
        <div style={{ paddingTop: '180px', paddingBottom: '50px' }}>
            통계페이지 {params.type}
        </div>
	);
}

export default typeStatisticsPage;
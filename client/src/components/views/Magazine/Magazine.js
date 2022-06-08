import React from 'react'
import "./Magazine.css"

function Magazine() {
    return (
        <div class="background">
            <div class="memo">
                <img style={{width:'100%', position:"relative"}} src={require('./header.png')} />
                <div style={{position:"absolute",width:'100%', top:'0px'}}><h1 style={{fontSize:'230%', position:'relative', left:'130px', top:'150px'}}><strong>지속가능한 패션 뷰티</strong> 를 추구하는<br/><strong>'Eco-friendly'</strong> 브랜드!</h1></div>
                <div class="content">
                    <p>제품의 생산부터 유통까지의 과정에서<br/>
                    환경적, 윤리적 문제의 해결을 위해 노력하는 기업들이 있습니다.<br/>
                    <br/>
                    사회적 책임을 실천하며<br/>
                    지속가능한 패션 뷰티를 추구하는<br/>
                    착한 브랜드를 소개할게요! 🌱</p>
                    <hr style={{margin:'2rem 1rem', borderTop:'1px solid #ededed', borderBottom:'1px solid #fff'}}/>
                    <p>
                        <img style={{position:'relative', marginLeft:'30px'}} src={require('./src/비건타이거 상품3.jpg')} />
                        <p><a style={{ display: 'flex', justifyContent: 'center'}}>비건 타이거</a><br/>
                        VEGAN TIGER (비건타이거)는 모피동물의 고통을 종식시키고 소비자들에게 좀 더 넓은 선택권을 주고자 CRUELTY FREE라는 슬로건을 지닌, 잔혹함이 없는 비건패션을 제안합니다. 
                        비건타이거는 동물에게서 착취된 소재를 절대로 사용하지 않으며 이를 대체하는 훌륭한 비동물성 소재를 직접 선정, 디자인하여 제공합니다. 
                        또 수익금의 5%는 모피반대를 위한 캠페인 기금으로 전환하여 동물과 지구를 위한 아름다운 공존, 윤리적인 소비 싸이클을 만들어 나가기 위해 노력하고 있습니다.
                        </p>
                    </p>
                    <hr style={{margin:'2rem 1rem', borderTop:'1px solid #ededed', borderBottom:'1px solid #fff'}}/>
                    <p>
                    <img style={{position:'relative', width:'500px', marginLeft:'55px'}} src={require('./src/그루 상품3.png')} />
                    <p><a style={{ display: 'flex', justifyContent: 'center'}}>그루(G:ru)</a><br/>
                        공정무역 대표 브랜드인 그루(G:ru)는 아시아 수공예 생산자와 소비자를 이어주며 슬로우 패션을 추구하는 지속가능 윤리적 패션 기업입니다.
                        그루라는 브랜드명에는 나무 한 그루 한 그루가 모여 숲을 이루듯 한 사람 한 사람의 작은 손길이 모여 하나의 큰 변화의 움직임이 이뤄지길 바라는 마음이 담겨있습니다. 
                        그루는 빈곤 국가의 여성 생산자들의 손을 거친 100% 수공예 제품 위주로 판매를 진행하고 있으며 친환경 원료와 핸드메이드 제품을 공정한 가격에 거래하여 생산자의 
                        경제적 자립과 그 가족, 지역의 지속가능한 삶을 지원하고 있습니다.
                        </p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Magazine

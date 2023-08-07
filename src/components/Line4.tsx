import { useEffect, useRef } from 'react';

function Line4() {
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const svg = circleRef.current;
    if (svg) {
      svg.addEventListener('click', () => {
        console.log('ok');
      });
    }
  }, []);
  return (
    <symbol id="line4SvgContainer">
      <path
        d="M1640,37 C1760,37 1760,157 1760,157"
        fill="none"
        stroke="#08A5E3"
        strokeWidth="8"
      />
      <line
        x1={1760}
        y1={157}
        x2={1760}
        y2={220}
        strokeWidth="8"
        stroke="#08A5E3"
      />
      <line
        x1={1100}
        y1={37}
        x2={1640}
        y2={37}
        strokeWidth="8"
        stroke="#08A5E3"
      />
      <path
        d="M1038,100 C1038,37 1100,37 1100,37"
        fill="none"
        stroke="#08A5E3"
        strokeWidth="8"
      />
      <line
        x1={1038}
        y1={100}
        x2={1038}
        y2={290}
        strokeWidth="8"
        stroke="#08A5E3"
      />
      <path
        d="M1038,330 C1038,393 975,393 975,393"
        fill="none"
        stroke="#08A5E3"
        strokeWidth="8"
      />
      <line
        x1={975}
        y1={393}
        x2={915}
        y2={393}
        strokeWidth="8"
        stroke="#08A5E3"
      />
      <path
        d="M915,393 C855,393 855,450 855,450"
        fill="none"
        stroke="#08A5E3"
        strokeWidth="8"
      />
      <path
        d="M855,450 C855,510 915,510 915,510"
        fill="none"
        stroke="#08A5E3"
        strokeWidth="8"
      />
      <path
        d="M915,510 C975,510 975,570 975,570"
        fill="none"
        stroke="#08A5E3"
        strokeWidth="8"
      />
      <line
        x1={975}
        y1={570}
        x2={975}
        y2={1165}
        strokeWidth="8"
        stroke="#08A5E3"
      />
      <path
        d="M975,1165 C975,1225 915,1225 915,1225"
        fill="none"
        stroke="#08A5E3"
        strokeWidth="8"
      />
      <line
        x1={495}
        y1={1225}
        x2={915}
        y2={1225}
        strokeWidth="8"
        stroke="#08A5E3"
      />
      <path
        d="M495,1225 C435,1225 435,1285 435,1285"
        fill="none"
        stroke="#08A5E3"
        strokeWidth="8"
      />
      <line
        x1={435}
        y1={1525}
        x2={435}
        y2={1285}
        strokeWidth="8"
        stroke="#08A5E3"
      />
      <path
        d="M255,1525 C255,1645 435,1645 435,1525"
        fill="none"
        stroke="#08A5E3"
        strokeWidth="8"
      />
      {/* station */}
      {/* 진접 */}
      <circle
        cx={1760}
        cy={220}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
        ref={circleRef}
      />
      {/* 오남 */}
      <circle
        cx={1760}
        cy={157}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 별내별가람 */}
      <circle
        cx={1730}
        cy={75}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 당고개 */}
      <circle
        cx={1640}
        cy={37}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 상계 */}
      <circle
        cx={1580}
        cy={37}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 노원 */}
      <rect
        width={15}
        height={30}
        x={1520}
        y={18}
        rx={8}
        ry={8}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 창동 */}
      <rect
        width={15}
        height={30}
        x={1460}
        y={18}
        rx={8}
        ry={8}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 쌍문 */}
      <circle
        cx={1400}
        cy={37}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 수유 */}
      <circle
        cx={1340}
        cy={37}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 미아 */}
      <circle
        cx={1280}
        cy={37}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 미아 사거리 */}
      <circle
        cx={1220}
        cy={37}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 길음 */}
      <circle
        cx={1160}
        cy={37}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 성신여대입구 */}
      <rect
        width={15}
        height={30}
        x={1100}
        y={28}
        rx={8}
        ry={8}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 한성대 입구 */}
      <circle
        cx={1038}
        cy={100}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 혜화 */}
      <circle
        cx={1038}
        cy={160}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 동대문 */}
      <rect
        width={15}
        height={30}
        x={1031}
        y={220}
        rx={8}
        ry={8}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 충무로 */}
      <rect
        width={30}
        height={15}
        x={965}
        y={385}
        rx={8}
        ry={8}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 명동 */}
      <circle
        cx={910}
        cy={393}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 회현 */}
      <circle
        cx={870}
        cy={411}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 서울역 */}
      <rect
        width={50}
        height={15}
        x={820}
        y={445}
        rx={8}
        ry={8}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 숙대입구 */}
      <circle
        cx={870}
        cy={492}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 삼각지 */}
      <rect
        width={30}
        height={15}
        x={895}
        y={501}
        rx={8}
        ry={8}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 신용산 */}
      <circle
        cx={975}
        cy={570}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 이촌 */}
      <rect
        width={15}
        height={30}
        x={968}
        y={670}
        rx={8}
        ry={8}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 동작 */}
      <rect
        width={15}
        height={30}
        x={968}
        y={770}
        rx={8}
        ry={8}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 총신대입구 */}
      <rect
        width={15}
        height={30}
        x={968}
        y={870}
        rx={8}
        ry={8}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 사당 */}
      <rect
        width={15}
        height={30}
        x={968}
        y={965}
        rx={8}
        ry={8}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 남태령 */}
      <circle
        cx={975}
        cy={1040}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 선바위 */}
      <circle
        cx={975}
        cy={1100}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 경마공원 */}
      <circle
        cx={975}
        cy={1165}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 대공원 */}
      <circle
        cx={960}
        cy={1206}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 과천 */}
      <circle
        cx={915}
        cy={1225}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 정부 과천청사 */}
      <circle
        cx={855}
        cy={1225}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 인덕원 */}
      <circle
        cx={795}
        cy={1225}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 평촌 */}
      <circle
        cx={735}
        cy={1225}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 범계 */}
      <circle
        cx={675}
        cy={1225}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 금정 */}
      <rect
        width={15}
        height={30}
        x={605}
        y={1215}
        rx={8}
        ry={8}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 산본 */}
      <circle
        cx={545}
        cy={1225}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 수리산 */}
      <circle
        cx={495}
        cy={1225}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 대야미 */}
      <circle
        cx={450}
        cy={1244}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 반월 */}
      <circle
        cx={435}
        cy={1285}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 상록수 */}
      <circle
        cx={435}
        cy={1345}
        r={5}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 한대앞 */}
      <rect
        width={30}
        height={15}
        x={415}
        y={1405}
        rx={8}
        ry={8}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 중앙 */}
      <rect
        width={30}
        height={15}
        x={415}
        y={1465}
        rx={8}
        ry={8}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 고잔 */}
      <rect
        width={30}
        height={15}
        x={415}
        y={1525}
        rx={8}
        ry={8}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 초지 */}
      <rect
        width={15}
        height={40}
        x={400}
        y={1562}
        rx={8}
        ry={8}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 안산 */}
      <rect
        width={15}
        height={30}
        x={360}
        y={1592}
        rx={8}
        ry={8}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 신길온천 */}
      <rect
        width={15}
        height={30}
        x={310}
        y={1592}
        rx={8}
        ry={8}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 정왕 */}
      <rect
        width={15}
        height={40}
        x={273}
        y={1562}
        rx={8}
        ry={8}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* 오이도 */}
      <rect
        width={30}
        height={15}
        x={245}
        y={1525}
        rx={8}
        ry={8}
        fill="white"
        strokeWidth={5}
        stroke="#08A5E3"
      />
      {/* station name */}
      <text
        x={1760}
        y={220}
        dx={15}
        dy={7}
        fill="black"
        fontSize={20}
        fontWeight={800}
      >
        진접
      </text>
      <text
        x={1760}
        y={157}
        dx={15}
        dy={7}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        오남
      </text>
      <text
        x={1730}
        y={75}
        dx={5}
        dy={-10}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        별내별가람
      </text>
      <text
        x={1640}
        y={37}
        dx={-26}
        dy={30}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        당고개
      </text>
      <text
        x={1580}
        y={37}
        dx={-17}
        dy={30}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        상계
      </text>
      <text
        x={1490}
        y={37}
        dx={20}
        dy={35}
        fill="black"
        fontSize={20}
        fontWeight={800}
      >
        노원
      </text>
      <text
        x={1430}
        y={37}
        dx={20}
        dy={35}
        fill="black"
        fontSize={20}
        fontWeight={800}
      >
        창동
      </text>
      <text
        x={1400}
        y={37}
        dx={-17}
        dy={30}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        쌍문
      </text>
      <text
        x={1340}
        y={37}
        dx={-17}
        dy={30}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        수유
      </text>
      <text
        x={1280}
        y={37}
        dx={-17}
        dy={30}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        미아
      </text>
      <text
        x={1220}
        y={37}
        dx={-27}
        dy={30}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        미아
        <tspan dx={-44} dy={20}>
          사거리
        </tspan>
      </text>
      <text
        x={1160}
        y={37}
        dx={-17}
        dy={30}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        길음
      </text>
      <text
        x={1070}
        y={45}
        dx={20}
        dy={40}
        fill="black"
        fontSize={20}
        fontWeight={800}
      >
        성신
        <tspan dx={-35} dy={25}>
          여대
        </tspan>
        <tspan dx={-35} dy={25}>
          입구
        </tspan>
      </text>
      <text
        x={965}
        y={103}
        dx={10}
        dy={5}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        한성대
        <tspan dx={-35} dy={20}>
          입구
        </tspan>
      </text>
      <text
        x={1038}
        y={160}
        dx={10}
        dy={7}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        혜화
      </text>
      <text
        x={1038}
        y={235}
        dx={15}
        dy={5}
        fill="black"
        fontSize={20}
        fontWeight={800}
      >
        동대문
      </text>
      <text
        x={965}
        y={385}
        dx={-10}
        dy={40}
        fill="black"
        fontSize={20}
        fontWeight={800}
      >
        충무로
      </text>
      <text
        x={900}
        y={395}
        dx={0}
        dy={29}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        명동
      </text>
      <text
        x={820}
        y={390}
        dx={5}
        dy={20}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        회현
      </text>
      <text
        x={815}
        y={445}
        dx={60}
        dy={15}
        fill="black"
        fontSize={20}
        fontWeight={800}
      >
        서울역 KTX
      </text>
      <text
        x={790}
        y={520}
        dx={10}
        dy={0}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        숙대입구
      </text>
      <text
        x={895}
        y={501}
        dx={-10}
        dy={40}
        fill="black"
        fontSize={20}
        fontWeight={800}
      >
        삼각지
      </text>
      <text
        x={975}
        y={570}
        dx={15}
        dy={7}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        신용산
      </text>
      <text
        x={968}
        y={670}
        dx={-45}
        dy={20}
        fill="black"
        fontSize={20}
        fontWeight={800}
      >
        이촌
      </text>
      <text
        x={968}
        y={770}
        dx={25}
        dy={25}
        fill="black"
        fontSize={20}
        fontWeight={800}
      >
        동작
      </text>
      <text
        x={968}
        y={870}
        dx={25}
        dy={24}
        fill="black"
        fontSize={20}
        fontWeight={800}
      >
        총신대입구
        <tspan dx={-87} dy={23}>
          (이수)
        </tspan>
      </text>
      <text
        x={910}
        y={1005}
        dx={20}
        dy={5}
        fill="black"
        fontSize={20}
        fontWeight={800}
      >
        사당
      </text>
      <text
        x={975}
        y={1040}
        dx={15}
        dy={7}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        남태령
      </text>
      <text
        x={975}
        y={1100}
        dx={15}
        dy={7}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        선바위
      </text>
      <text
        x={975}
        y={1165}
        dx={15}
        dy={7}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        경마공원
      </text>
      <text
        x={960}
        y={1206}
        dx={10}
        dy={20}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        대공원
      </text>
      <text
        x={915}
        y={1225}
        dx={-5}
        dy={30}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        과천
      </text>
      <text
        x={855}
        y={1225}
        dx={-35}
        dy={35}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        정부
        <tspan dx={-52} dy={23}>
          과천청사
        </tspan>
      </text>
      <text
        x={795}
        y={1225}
        dx={-25}
        dy={-20}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        인덕원
      </text>
      <text
        x={735}
        y={1225}
        dx={-17}
        dy={35}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        평촌
      </text>
      <text
        x={675}
        y={1225}
        dx={-20}
        dy={-20}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        범계
      </text>
      <text
        x={605}
        y={1225}
        dx={20}
        dy={25}
        fill="black"
        fontSize={20}
        fontWeight={800}
      >
        금정
      </text>
      <text
        x={545}
        y={1225}
        dx={-18}
        dy={-20}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        산본
      </text>
      <text
        x={495}
        y={1225}
        dx={-28}
        dy={-20}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        수리산
      </text>
      <text
        x={450}
        y={1244}
        dx={-55}
        dy={-15}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        대야미
      </text>
      <text
        x={440}
        y={1285}
        dx={-52}
        dy={8}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        반월
      </text>
      <text
        x={435}
        y={1345}
        dx={-65}
        dy={8}
        fill="gray"
        fontSize={20}
        fontWeight={800}
      >
        상록수
      </text>
      <text
        x={415}
        y={1405}
        dx={40}
        dy={13}
        fill="black"
        fontSize={20}
        fontWeight={800}
      >
        한대앞
      </text>
      <text
        x={415}
        y={1465}
        dx={40}
        dy={13}
        fill="black"
        fontSize={20}
        fontWeight={800}
      >
        중앙
      </text>
      <text
        x={415}
        y={1525}
        dx={40}
        dy={13}
        fill="black"
        fontSize={20}
        fontWeight={800}
      >
        고잔
      </text>
      <text
        x={400}
        y={1562}
        dx={25}
        dy={40}
        fill="black"
        fontSize={20}
        fontWeight={800}
      >
        초지
      </text>
      <text
        x={360}
        y={1592}
        dx={-10}
        dy={55}
        fill="black"
        fontSize={20}
        fontWeight={800}
      >
        안산
      </text>
      <text
        x={310}
        y={1592}
        dx={-55}
        dy={55}
        fill="black"
        fontSize={20}
        fontWeight={800}
      >
        신길온천
      </text>
      <text
        x={273}
        y={1562}
        dx={-40}
        dy={50}
        fill="black"
        fontSize={20}
        fontWeight={800}
      >
        정왕
      </text>
      <text
        x={245}
        y={1525}
        dx={-60}
        dy={15}
        fill="black"
        fontSize={20}
        fontWeight={800}
      >
        오이도
      </text>
    </symbol>
  );
}

export default Line4;

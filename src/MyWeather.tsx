import React from "react";
import { Component } from "react";

interface MyProps {
    weather: string;
    children: React.ReactNode;
}

// const MyWeather: React.FC<MyProps> = ({ children, weather }) => {

//     return (
//         <div>
//             {children}
//             <br />
//             오늘의 날씨는 {weather}입니다.
//         </div>
//     )
// }

// 이 컴포넌트를 누가 호출했는지 알아야 할 때 this 사용
class MyWeather extends Component<MyProps> {
    render() {
        const { children, weather } = this.props;

        return (
            <div>
                {children}
                <br />
                오늘의 날씨는 {weather}입니다.
            </div>
        )
    }
}

export default MyWeather;
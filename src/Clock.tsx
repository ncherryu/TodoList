import { useState } from "react";

const Clock: React.FC = () => {
    const [time, setTime] = useState(new Date());

    setInterval(() => {
        setTime(new Date());
    }, 1000)

    return (
        <div>
            <h2 className="fs-5 fw-bold">현재 시간</h2>
            <p className="fs-6">
                {time.toLocaleTimeString()}
            </p>
        </div>
    )
}

export default Clock;
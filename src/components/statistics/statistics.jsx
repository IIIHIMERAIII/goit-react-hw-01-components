
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }

export const Statistics = ({title, stats}) => {
    return (
        <section class="statistics">

           {title && <h2 class="title">{title}</h2>} 
            <ul class="stat-list">
                {stats.map(item => {
                    return (
                    <li style={{ backgroundColor : getRandomHexColor() }} class="item">
                    <span class="label">{item.label}</span>
                    <span class="percentage">{item.percentage}%</span>
                </li>)
                })}
            </ul>
        </section>
    );
};
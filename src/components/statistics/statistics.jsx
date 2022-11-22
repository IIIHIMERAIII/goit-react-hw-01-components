
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
                {/* <li style={{ backgroundColor : getRandomHexColor() }} class="item">
                    <span class="label">{props.stats[0].label}</span>
                    <span class="percentage">{props.stats[0].percentage}%</span>
                </li>
                <li style={{ backgroundColor : getRandomHexColor() }}  class="item">
                    <span class="label">{props.stats[1].label}</span>
                    <span class="percentage">{props.stats[1].percentage}%</span>
                </li>
                <li style={{ backgroundColor : getRandomHexColor() }} class="item">
                    <span class="label">{props.stats[2].label}</span>
                    <span class="percentage">{props.stats[2].percentage}%</span>
                </li>
                <li style={{ backgroundColor : getRandomHexColor() }} class="item">
                    <span class="label">{props.stats[3].label}</span>
                    <span class="percentage">{props.stats[3].percentage}%</span>
                </li> */}
            </ul>
        </section>
    );
};
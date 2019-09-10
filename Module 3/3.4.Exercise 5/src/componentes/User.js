import React from "react";
import MediaCards from "./MediaCard";

const ana = "https://media.licdn.com/dms/image/C4D03AQF0adb8yB2XIA/profile-displayphoto-shrink_200_200/0?e=1568246400&v=beta&t=Q-_0q_zfkIG6cjsK2sD1APkIrRvkaL3l8_wvwXk9mmo";

const laura = "https://media.licdn.com/dms/image/C4D03AQGpm8rCwfKbHg/profile-displayphoto-shrink_200_200/0?e=1573084800&v=beta&t=qY9KFBO071opXcyw7itp0MNc1GTg4MoKqwokPiuQAo0";

const User = <MediaCards name="Ana Montiaga" date="Lunes 26 de junio de 2017" image={ana}></MediaCards>;

const User2 = <MediaCards name="Laura Pareja" date="Lunes 26 de junio de 2017" image={laura}></MediaCards>;

export { User, User2 };

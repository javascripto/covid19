import * as React from "react";

import { CovidInfoBox } from "./CovidInfoBox";

interface Props {
  confirmed: number;
  deaths: number;
  recovered: number;
  children: React.ReactNode;
}

export const CovidInfoSection = (props: Props) => {
  const { confirmed = 0, deaths = 0, recovered = 0, children } = props;
  return (
    <div>
      <div>{children}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <CovidInfoBox color={"#f77427"} number={confirmed} text="Casos Confirmados" />
        <CovidInfoBox color={"#ec314b"} number={deaths}    text="Mortes" />
        <CovidInfoBox color={"#05b584"} number={recovered} text="Recuperados" />
      </div>
    </div>
  );
};

interface Props {
  fill: string;
  width: string;
  height: string;
}

export default function MineSVG({ fill, width, height }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={width} height={height} fill={fill}>
      <path
        d="M90,47.5L85,47.5L85,45L79.577,45C78.812,40.443,77.02,36.237,74.447,32.624L78.284,28.787L76.516,27.019L80.052,23.483L76.516,19.947L72.98,23.483L71.212,21.715L67.375,25.552C63.761,22.979,59.555,21.187,54.999,20.422L54.999,15L52.499,15L52.499,10L47.499,10L47.499,15L45,15L45,20.423C40.443,21.188,36.237,22.98,32.624,25.553L28.787,21.716L27.019,23.484L23.483,19.948L19.947,23.484L23.483,27.02L21.715,28.788L25.552,32.625C22.979,36.239,21.187,40.445,20.422,45.001L15,45.001L15,47.501L10,47.501L10,52.501L15,52.501L15,55L20.423,55C21.188,59.557,22.98,63.763,25.553,67.376L21.716,71.213L23.484,72.981L19.948,76.517L23.484,80.053L27.02,76.517L28.788,78.285L32.625,74.448C36.239,77.021,40.445,78.813,45.001,79.578L45.001,85L47.501,85L47.501,90L52.501,90L52.501,85L55,85L55,79.577C59.557,78.812,63.763,77.02,67.376,74.447L71.213,78.284L72.981,76.516L76.517,80.052L80.053,76.516L76.517,72.98L78.285,71.212L74.448,67.375C77.021,63.761,78.813,59.555,79.578,54.999L85,54.999L85,52.499L90,52.499L90,47.5ZM50,25L50,30C38.972,30,30,38.972,30,50L25,50C25,36.215,36.215,25,50,25Z"
        stroke="none"
      />
    </svg>
  );
}

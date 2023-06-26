import { Tooltip } from 'react-tooltip';

const DisplayScheme = ({ isFetching, data, isFetched }) => {
  return (
    <>
      <Tooltip id="my-tooltip" openOnClick="true">
        Copied! ✅
      </Tooltip>
      <li className="copy-text">
        ⭐ Click on Below Colors to Copy to Clipboard 📋
      </li>

      {isFetching ? (
        <p
          className="axios-message"
          style={{ color: data?.data?.seed?.hex?.value }}
        >
          LOADING...
        </p>
      ) : (
        <div className="color-group">
          {/* Seed Color passed to API */}
          {data?.data?.seed && (
            <div
              key={data?.data?.seed?.hex?.value}
              data-tooltip-id="my-tooltip"
              data-tooltip-place="bottom"
              data-tooltip-content="Copied! ✅"
              data-tooltip-delay-hide={800}
              style={
                isFetched
                  ? {
                      border: ` 2.5px solid #040049`,
                      backgroundColor: data?.data?.seed?.hex?.value,
                    }
                  : {
                      border: 'none',
                      backgroundColor: data?.data?.seed?.hex?.value,
                    }
              }
              onClick={() =>
                navigator.clipboard.writeText(`${data?.data?.seed?.hex?.value}`)
              }
              className="color"
            >
              <p style={{ color: data?.data?.seed?.contrast?.value }}>
                {data?.data?.seed?.hex?.value}
              </p>
            </div>
          )}
          {/* Scheme generated by seed color */}
          {data?.data?.colors &&
            data?.data?.colors?.map(allColors => {
              return (
                <div
                  key={allColors.hex.value}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-place="bottom"
                  data-tooltip-content="Copied! ✅"
                  data-tooltip-delay-hide={800}
                  style={
                    isFetched
                      ? {
                          border: ` 2.5px solid #040049`,
                          backgroundColor: allColors?.hex?.value,
                        }
                      : {
                          border: 'none',
                          backgroundColor: allColors?.hex?.value,
                        }
                  }
                  onClick={() =>
                    navigator.clipboard.writeText(`${allColors?.hex?.value}`)
                  }
                  className="color"
                >
                  <p style={{ color: allColors?.contrast?.value }}>
                    {allColors?.hex?.value}
                  </p>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default DisplayScheme;

/**
 * @author 陆劲涛
 * @description
 */
import Loading from '@/components/Loading';
import {useCallback, useEffect, useRef, useState} from 'react';
import ForceGraph3D, {GraphData} from 'react-force-graph-3d';
import ForceGraph2D from 'react-force-graph-2d';
import ky from 'ky';
function genRandomTree(N = 300, reverse = false) {
  return {
    nodes: [...Array(N).keys()].map(i => ({id: i})),
    links: [...Array(N).keys()]
      .filter(id => id)
      .map(id => ({
        [reverse ? 'target' : 'source']: id,
        [reverse ? 'source' : 'target']: Math.round(Math.random() * (id - 1)),
      })),
  };
}

interface LoadDataButtonProp {
  btnName: '景区' | '酒店' | '美食';
}

export const Graph: React.FC = props => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [is3D, setIs3D] = useState(false);

  // useEffect(() => {
  //   ky.get('/api/hotel', {
  //     timeout: 300000,
  //   }).then(res => setData(res));
  // }, []);

  const fgRef = useRef<any>();

  const nodeFocus = useCallback(
    (node: any) => {
      const distance = 40;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
      fgRef.current.cameraPosition(
        {x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio}, // new position
        node,
        3000
      );
    },
    [fgRef]
  );

  const SearchBar: React.FC = props => {
    const handleSubmit = (e: any) => {
      e.preventDefault();
      console.log('查询实体');
      ky.get('/api/search?q=' + inputValue).then(res => setData(res));
    };
    const handleChange = (e: any) => {
      setInputValue(e.target.value);
    };
    const [inputValue, setInputValue] = useState('');
    return (
      <div className="flex justify-center">
        <form className="mb-3 w-48" onSubmit={handleSubmit}>
          <input
            type="search"
            value={inputValue}
            onChange={handleChange}
            className="relative m-0 block w-full
            min-w-0 flex-auto rounded border border-solid
             border-cyan-300 bg-transparent bg-clip-padding
            px-3 py-1.5 text-base font-normal text-white
            outline-none transition duration-300
            ease-in-out focus:border-primary-600
            focus:outline-none dark:border-neutral-600
            dark:text-white dark:placeholder:text-white"
            id="exampleSearch"
            placeholder="搜索实体或关系"
          />
        </form>
      </div>
    );
  };

  const LoadDataButton: React.FC<LoadDataButtonProp> = props => {
    return (
      <button
        onClick={() => {
          let url = '';
          if (props.btnName == '酒店') {
            url = '/hotel';
          } else if (props.btnName == '景区') {
            url = '/all/scenic';
          } else if (props.btnName == '美食') {
            url = '/food';
          } else {
            url;
          }
          setLoading(true);
          ky.get('/api' + url, {
            timeout: 30000,
          })
            .json()
            .then(data => {
              setLoading(false);
              setData(data);
            })
            .catch(err => {
              setLoading(false);
              console.log(err);
            });
        }}
        className="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-transparent text-cyan-300 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
      >
        {props.btnName}
      </button>
    );
  };

  const Switch2D: React.FC = props => {
    return (
      <div className="flex items-center">
        <label className="text-sm text-white mr-3 dark:text-gray-400">2D</label>
        <input
          type="checkbox"
          id="hs-basic-with-description"
          onClick={() => {
            setIs3D(!is3D);
          }}
          defaultChecked={is3D}
          className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none 
                  checked:bg-blue-600
                     border-2 border-transparent rounded-full cursor-pointer 
                     transition-colors ease-in-out duration-200
                       ring-1 ring-transparent focus:border-blue-600
                       focus:ring-blue-600 ring-offset-white 
                       focus:outline-none appearance-none dark:bg-gray-700
                        dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                      before:inline-block before:w-6 before:h-6 before:bg-white
                       checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full 
                       before:shadow before:rounded-full before:transform before:ring-0 before:transition
                        before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
        />
        <label className="text-sm text-white ml-3 dark:text-gray-400">3D</label>
      </div>
    );
  };
  return (
    <div className="flex space-x-7">
      <div className="mb-24">
        <SearchBar />
        <Switch2D />
        <div className="mt-10 inline-flex rounded-md shadow-sm">
          <LoadDataButton btnName="景区" />
          <LoadDataButton btnName="酒店" />
          <LoadDataButton btnName="美食" />
        </div>
      </div>
      <div className="w-[1000px] h-[650px] flex justify-center content-center">
        {loading ? (
          <Loading />
        ) : is3D ? (
          <ForceGraph3D
            backgroundColor="rgba(255,255,255,0)"
            graphData={data}
            nodeAutoColorBy="group"
            ref={fgRef}
            nodeLabel="id"
            onNodeClick={nodeFocus}
          />
        ) : (
          <ForceGraph2D
            backgroundColor="rgba(255,255,255,0)"
            width={1000}
            height={650}
            graphData={data}
            nodeAutoColorBy="group"
            ref={fgRef}
            nodeLabel="id"
            onNodeClick={nodeFocus}
          />
        )}
      </div>
    </div>
  );
};

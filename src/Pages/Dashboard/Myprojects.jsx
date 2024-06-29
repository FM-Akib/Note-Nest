
import HeadDash from "./HeadDash";
import useUserInfo from "../../Hooks/useUserInfo";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { IoFileTrayStackedOutline } from "react-icons/io5";
import { FcInfo } from "react-icons/fc";
import { Helmet } from "react-helmet";


const Myprojects = () => {
    const { userInfo } = useUserInfo();
    const { components, email,  } = userInfo;
    const axiosPublic = useAxiosPublic();

    const {
        reset
    } = useForm();

    const handleUpdate = async (data, component) => {
        const resource = {
            ...component,
            price: data.price,
            sale: data.status,
        };
        console.log(resource);
        try {
            const result = await axiosPublic.patch(`/users/${email}/components/${component.id}`, { resource });
    
            if (result.data.result.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Updated your components!`,
                    showConfirmButton: false,
                    timer: 1500,
                });
                
            }
            reset();
        } catch (error) {
            console.error('Error updating component:', error);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `Failed to update components!`,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };
    
    return (
        <div className="pt-20 md:px-20 px-2 overflow-y-auto min-h-screen max-h-screen">
    <Helmet>
      <title>Note Nest - My Project</title>
    </Helmet>
            <HeadDash icn={<IoFileTrayStackedOutline className="text-[#EFCA08]" />} head="My Components" subHead="Your Hub for Quality Project Components"></HeadDash>
            {
              components?.length?  components?.map((component) => (
                    <ComponentCard 
                        key={component.id}
                        component={component}
                        onUpdate={handleUpdate}
                    />
                )) : <div className="flex flex-col items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="200"  viewBox="0 0 647.63626 632.17383" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z" transform="translate(-276.18187 -133.91309)" fill="#f2f2f2"/><path d="M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z" transform="translate(-276.18187 -133.91309)" fill="#3f3d56"/><path d="M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z" transform="translate(-276.18187 -133.91309)" fill="#9a031e"/><circle cx="190.15351" cy="24.95465" r="20" fill="#9a031e"/><circle cx="190.15351" cy="24.95465" r="12.66462" fill="#fff"/><path d="M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z" transform="translate(-276.18187 -133.91309)" fill="#e6e6e6"/><path d="M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z" transform="translate(-276.18187 -133.91309)" fill="#3f3d56"/><path d="M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z" transform="translate(-276.18187 -133.91309)" fill="#9a031e"/><circle cx="433.63626" cy="105.17383" r="20" fill="#9a031e"/><circle cx="433.63626" cy="105.17383" r="12.18187" fill="#fff"/></svg>
                    
                    <h2 className="mt-2 md:mt-5 bg-yellow-300 font-semibold px-4 py-2 rounded-lg flex items-center text-sm md:text-md justify-center"><FcInfo className="mr-1" /> You have no Project Components.</h2>
                </div>
            }
        </div>
    );
};

const ComponentCard = ({ component, onUpdate }) => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            status: component.sale,
            price: component.price,
        },
    });

    const onSubmit = (data) => {
        onUpdate(data, component);
    };

    return (
        <div 
            className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
        >
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
            <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                        {component.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-gray-600">By {component.authorName}</p>
                </div>
                <div className="sm:block sm:shrink-0">
                    <img
                        alt=""
                        src={component.projectImg}
                        className="size-36 my-2 md:my-0 rounded-lg object-cover shadow-sm"
                    />
                </div>
            </div>
            <div className="mt-4">
                <p className="text-pretty text-sm text-gray-500">
                    {component.description}
                </p>
            </div>
            <dl className="mt-6 flex flex-col md:flex-row gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600">BDT - {component.price}</dt>
                    <dd className="text-xs text-gray-500">{component.sale}</dd>
                </div>
                <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600">{component.contact}</dt>
                    <dd className="text-xs text-gray-500">Contact-</dd>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-4 sm:gap-6">
                    <div className="flex flex-col-reverse">
                        <div>
                            <label className="block text-sm font-medium text-gray-900"> Status </label>
                            <select {...register(`status`)}
                                className="mt-1.5 w-full px-2 py-1 rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                            >
                                <option value="">Please select</option>
                                <option value="Available">Available</option>
                                <option value="Sold-out">Sold-out</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse">
                        <label className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                            <input {...register(`price`)}
                                type="text"
                                placeholder="New Price"
                                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            />
                            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                                New Price
                            </span>
                        </label>
                    </div>
                    <button
                        className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-2 focus:outline-none focus:ring rounded-sm"
                        type="submit"
                    >
                        <span className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>
                        <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                            Update
                        </span>
                    </button>
                </form>
            </dl>
        </div>
    );
};

export default Myprojects;

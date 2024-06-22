import { RiShieldStarFill } from "react-icons/ri";
import HeadDash from "./HeadDash";
import useUserInfo from "../../Hooks/useUserInfo";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";


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
            <HeadDash icn={<RiShieldStarFill className="text-[#EFCA08]" />} head="My Components" subHead="Your Hub for Quality Project Components"></HeadDash>
            {
                components?.map((component) => (
                    <ComponentCard 
                        key={component.id}
                        component={component}
                        onUpdate={handleUpdate}
                    />
                ))
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

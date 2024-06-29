import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet";

const SignIn = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';
	
	const {register,handleSubmit} = useForm();
	const {SigninWithEmailPassword,SigninWithGoogle} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
	
	
	const handleGoogleSignin=()=>{
        SigninWithGoogle()
        .then((result) => {
            const Loggeduser = result.user;
                console.log(Loggeduser)


				const user ={
                    name: result.user?.displayName,
                    email: result.user?.email,
                    image: result.user?.photoURL,
                    myContribution: [],
                    bookmarked: [],
                    components: [],
                }
                // console.log(user)
               
                axiosPublic.post('/users',user)
                .then((result) => {
                  
                    if(result.data.insertedId){
						Swal.fire({
							position: "top-center",
							icon: "success",
							title: "login successful.",
							showConfirmButton: false,
							timer: 1500
						});
						navigate(from,{replace: true})
                         
                    }
                    // navigate('/',{replace: true})
                })


          })
          .catch((error) => {
            console.log(error.message);
          });
    }
		
		const onSubmit = (data) => {
			SigninWithEmailPassword(data.email, data.password)
			.then((result) => {
				const Loggeduser = result.user;
					console.log(Loggeduser)
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: "Sign in successful.",
						showConfirmButton: false,
						timer: 1500
                        });
                       navigate(from,{replace: true})
                  })
				.catch((error) => {
				console.log(error.message);
			});
		}
    return (
        <div className="md:grid grid-cols-10 p-2 md:p-14 ">

    <Helmet>
      <title>Note Nest - Login</title>
    </Helmet>

            <div className="border-l-2 md:border-t-2 md:border-b-2 border-r-2 md:border-r-0 col-span-5 bg-white md:rounded-l-md p-10 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">Note <span className="text-[#F50057]"> Nest</span></h1>
            <p className="mt-2 mb-10 text-sm font-semibold text-gray-400">
            A Note Sharing Hub for IIUCians.
            </p>
 
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"  viewBox="0 0 973.4614 587.02513" ><g id="f9b32178-6d95-472d-b482-6662972666de" data-name="Group 100"><path id="f4b94a19-cbe0-459a-95a6-6ea3b3d72055-503" data-name="Path 1465" d="M675.14672,628.10046a11.49,11.49,0,1,0,11.49,11.49h0A11.49,11.49,0,0,0,675.14672,628.10046Zm0,18.561a7.071,7.071,0,1,1,7.071-7.071v.00006A7.071,7.071,0,0,1,675.14672,646.66143Z" transform="translate(-113.2693 -156.48744)" fill="#e4e4e4"/><path id="abc0e0b3-f22e-4bee-9929-c6879640924e-504" data-name="Path 1467" d="M630.95367,619.26144h44.193v43.739a5.757,5.757,0,0,1-5.757,5.757h-32.679a5.757,5.757,0,0,1-5.757-5.757V619.26144Z" transform="translate(-113.2693 -156.48744)" fill="#e4e4e4"/></g><path id="e24b6f19-a0a0-4e73-9cfc-bbb7635ad236-505" data-name="Path 944" d="M778.40266,669.75845h-664.237a1.006,1.006,0,0,1,0-2h664.237a1.006,1.006,0,0,1,0,2Z" transform="translate(-113.2693 -156.48744)" fill="#cacaca"/><polygon points="89.41 494.381 85.302 514.694 161.695 540.208 167.759 510.228 89.41 494.381" fill="#ffb6b6"/><path d="M210.35961,647.029l-8.09119,40.00293-.00033.00162a26.01065,26.01065,0,0,1-30.64977,20.3355l-.82841-.1676,13.24784-65.49629Z" transform="translate(-113.2693 -156.48744)" fill="#2f2e41"/><circle id="fd4e5ab9-ffc8-4bbb-9267-3af70c31dae1" data-name="Ellipse 276" cx="175.97938" cy="162.713" r="51.871" fill="#feb8b8"/><path id="a8c9bbe2-1461-49cf-8211-f8d251166dc5-506" data-name="Path 1461" d="M337.69671,274.45043a59.90714,59.90714,0,0,0-34.08105-26.052l-6.368,4.647v-6.034a55.143,55.143,0,0,0-10.3-.6l-5.494,4.971v-4.558a59.33506,59.33506,0,0,0-40.932,24.347c-11.931,17.2-13.945,41.129-2.21,58.467,3.221-9.9,7.131-19.189,10.353-29.088a29.29917,29.29917,0,0,0,7.633.037l3.919-9.145,1.095,8.758c12.148-1.058,30.166-3.382,41.682-5.511l-1.12-6.719,6.7,5.583c3.528-.812,5.623-1.549,5.45-2.112,8.565,13.808,19.047,22.627,27.611,36.435C344.88769,308.40645,348.63171,292.21742,337.69671,274.45043Z" transform="translate(-113.2693 -156.48744)" fill="#2f2e41"/><ellipse id="f6be96d1-713f-4c17-812c-ecd79c56fe95" data-name="Ellipse 260" cx="192.85638" cy="464.78699" rx="133.56" ry="37.359" fill="#2f2e41"/><path d="M400.8085,452.58848c-1.78369-10.731-3.62354-21.668-8.61084-31.335-3.27784-6.332-8.481-12.366-15.49512-13.618a14.98964,14.98964,0,0,1-4.03467-.934c-2.05517-.99-29.67334-16.756-34.063-19.502-3.769-2.35736-9.71875-6.72223-12.71875-6.72223-3.01806-.06634-14.59082,2.62708-59.76025-.90381a163.14109,163.14109,0,0,0-22.01025,10.82172c-.14551-.09589-46.88184,25.00134-48.6377,24.9353-3.3252-.14-6.416,1.989-8.32227,4.67005-1.90576,2.681-2.7998,6-3.73584,9.209,10.208,22.733,19.54786,45.495,29.75684,68.228a5.82135,5.82135,0,0,1,.73828,2.8,6.83358,6.83358,0,0,1-1.27,2.8c-5.00635,8.042-4.84717,18.157-4.30029,27.609.54736,9.452,1.22412,19.436-3,27.908-1.14893,2.326-2.64307,4.455-3.73584,6.781-2.55908,5.268-3.48389,22.117-1.98926,27.777l187.2666,5.3648C382.85977,587.40928,400.8085,452.58848,400.8085,452.58848Z" transform="translate(-113.2693 -156.48744)" fill="#f50057"/><path id="eb41f72e-aba6-4a16-bf55-c7027d2f1a4b-507" data-name="Path 1421" d="M167.23268,498.44541a33.06266,33.06266,0,0,0-.112,8.154l2.684,38.546c.252,3.633.5,7.257.841,10.881.644,7.033,1.606,14.01,2.8,20.977a3.736,3.736,0,0,0,3.829,3.633c11.815,2.5,24.022,2.4,36.08,1.719,18.4-1.027,65.474-2.97,68.35-6.706s1.2-9.779-2.55-12.8-65.871-10.386-65.871-10.386c.607-4.81,2.438-9.34,4.175-13.907,3.12-8.1,6.034-16.466,6.09-25.143s-3.213-17.8-10.321-22.771c-5.847-4.081-13.375-4.838-20.5-4.67-5.184.149-14.141-1.093-18.876.934C170.10469,488.55644,167.93268,494.77647,167.23268,498.44541Z" transform="translate(-113.2693 -156.48744)" fill="#fbbebe"/><path id="a363f2f7-2464-40a1-ad01-344825aa0b75-508" data-name="Path 1423" d="M401.14067,585.57847c3.11-1.186,6.538-.757,9.872-.308,10.732,1.466,21.622,2.97,31.569,7.257,4.67,2,9.116,4.67,12.273,8.6,2.8,3.54,4.436,7.874,5.987,12.142l3.587,9.826a47.30032,47.30032,0,0,1,3.129,11.516c1.121,11.759-6.921,22.845-17.036,28.954s-22.023,8.284-33.624,10.563-23.247,4.8-34.8,7.472a140.08632,140.08632,0,0,1-16.373,3.222c-12.366,1.4-25.292-.663-37.042,3.428-4.67,1.635-9.256,4.063-14.1,5.193a87.74454,87.74454,0,0,1-9.751,1.485l-22.238,2.54a121.31294,121.31294,0,0,1-13.636,1.046c-9.713,0-19.268-2.3-28.7-4.6a7.25771,7.25771,0,0,1-2.8-1.13c-1.494-1.177-1.821-3.26-2.036-5.146q-1.429-12.525-2.5-25.077c-.224-2.718-.392-5.66,1.093-7.948,1.868-2.8,5.511-3.68,8.836-4.222a230.57994,230.57994,0,0,1,42.665-2.961c5.426-5.426,14.374-5.454,21.482-8.406a63.89712,63.89712,0,0,0,7.575-4.119,99.00057,99.00057,0,0,1,41.59-13.141,38.71437,38.71437,0,0,0,8.509-1.214c5.5-1.709,10.517-6.361,16.167-5.221.7-1.933,1.186-4.521,2.8-5.847.8-.682,1.793-1.139,2.531-1.868,1.56-1.578,1.7-4.063,1.466-6.267s-.757-4.464-.187-6.613a9.14077,9.14077,0,0,1,1.037-2.307C391.27767,587.59544,395.50869,585.11143,401.14067,585.57847Z" transform="translate(-113.2693 -156.48744)" fill="#2f2e41"/><path id="b53ad979-99f4-4c6e-a0f8-957060c42096-509" data-name="Path 1430" d="M182.87968,429.90143a9.66706,9.66706,0,0,0-2.073,3.316,156.78038,156.78038,0,0,0-13.169,53.816,5.38,5.38,0,0,1-.607,2.606,11.40276,11.40276,0,0,1-1.373,1.485,5.156,5.156,0,0,0,.61662,7.26557q.12733.10739.26138.20642c1.541-2.9,5.23-3.848,8.509-4.1,15.7-1.242,31.036,6.062,46.783,5.511-1.111-3.839-2.709-7.528-3.615-11.413-4.007-17.251,5.987-36.033-.14-52.649-1.224-3.325-3.269-6.594-6.491-8.051a17.29051,17.29051,0,0,0-4.156-1.1c-3.979-.719-11.9-3.792-15.747-2.559-1.42.458-1.98,1.793-3.157,2.6C186.73368,427.97745,184.36169,428.39743,182.87968,429.90143Z" transform="translate(-113.2693 -156.48744)" fill="#f50057"/><path id="a1197c30-bfd4-4098-bcf9-2468e7a33bf1-510" data-name="Path 1421" d="M400.92057,486.90641c-4.735-2.027-13.692-.785-18.876-.934-7.125-.168-14.653.589-20.5,4.67-7.108,4.971-10.377,14.094-10.321,22.771s2.97,17.043,6.09,25.143c1.737,4.567,3.568,9.097,4.175,13.907,0,0-62.121,7.365-65.871,10.386s-5.426,9.064-2.55,12.8,92.615,7.487,104.43,4.987a3.736,3.736,0,0,0,3.829-3.633c1.194-6.967,2.156-13.944,2.8-20.977.341-3.624.589-7.248.841-10.881l2.684-38.546a33.06364,33.06364,0,0,0-.112-8.154C406.83959,494.77647,404.66758,488.55644,400.92057,486.90641Z" transform="translate(-113.2693 -156.48744)" fill="#fbbebe"/><path id="ebe46053-6aac-4aa7-8615-21a6fa79538d-511" data-name="Path 1430" d="M386.25057,426.83542c-1.177-.807-1.737-2.142-3.157-2.6-3.847-1.233-11.768,1.84-15.747,2.559a17.29056,17.29056,0,0,0-4.156,1.1c-3.222,1.457-5.267,4.726-6.491,8.051-6.127,16.616,3.867,35.398-.14,52.649-.906,3.885-2.504,7.574-3.615,11.413,15.747.551,31.083-6.753,46.783-5.511,3.279.252,6.968,1.2,8.509,4.1q.134-.099.26138-.20642a5.156,5.156,0,0,0,.61663-7.26557,11.40137,11.40137,0,0,1-1.373-1.485,5.37993,5.37993,0,0,1-.607-2.606,156.78014,156.78014,0,0,0-13.169-53.816,9.66706,9.66706,0,0,0-2.073-3.316C390.41058,428.39743,388.03858,427.97745,386.25057,426.83542Z" transform="translate(-113.2693 -156.48744)" fill="#f50057"/><polygon points="299.243 523.378 296.513 543.921 215.975 543.166 220.005 512.846 299.243 523.378" fill="#ffb6b6"/><path d="M433.12244,677.27239l-8.804,66.24017-.83783-.11132a26.01064,26.01064,0,0,1-22.35645-29.20839l.00022-.00163,5.3773-40.45722Z" transform="translate(-113.2693 -156.48744)" fill="#2f2e41"/><path id="a0b0f7ea-4ed9-4447-aa64-e2335b2c3196-512" data-name="Path 1427" d="M223.03869,595.97441c0,.934-1.466,0-1.6-1-1.027-7.556-7.024-13.786-14.01-16.812s-14.944-3.185-22.509-2.466c-11.441,1.083-24.284,5.464-28.468,16.158-.99,2.5-10.264,24.76-9.359,29.766,2.438,13.356,11.572,24.779,22.64,32.69s24,12.637,36.9,16.9a639.94948,639.94948,0,0,0,104.607,24.984c5.753.869,11.563,1.672,17.073,3.521,4.931,1.653,9.545,4.128,14.365,6.071,11.208,4.5,23.266,6.108,35.211,7.687,2.036.262,4.371.448,5.875-.934,1.943-1.8,1.3-4.941.747-7.528a40.488,40.488,0,0,1,4.773-28.729c2-3.362,4.6-6.809,4.222-10.7-.448-4.539-4.969-7.752-9.471-8.481s-9.078.346-13.6.934a7.285,7.285,0,0,1-4.623-.458,9.23483,9.23483,0,0,1-1.812-1.606,20.482,20.482,0,0,0-23.854-3.334c-1.672.934-4.2-1.149-5.94-1.933l-19.642-8.892c-22.565-10.208-45.242-20.464-69.115-26.927a14.51449,14.51449,0,0,1-5.324-2.214c-1.186-.934-2.036-2.2-3.129-3.241-2.382-2.251-5.7-3.148-8.555-4.745S222.38468,599.17742,223.03869,595.97441Z" transform="translate(-113.2693 -156.48744)" fill="#2f2e41"/><circle cx="160.61683" cy="411.98984" r="14" fill="#fbbebe"/><circle cx="191.61683" cy="411.98984" r="14" fill="#fbbebe"/><path d="M391.30469,600.02441H198.96582a8.4798,8.4798,0,0,1-8.47021-8.46972V474.86816a8.4798,8.4798,0,0,1,8.47021-8.46972H391.30469a8.4798,8.4798,0,0,1,8.47021,8.46972V591.55469A8.4798,8.4798,0,0,1,391.30469,600.02441Z" transform="translate(-113.2693 -156.48744)" fill="#3f3d56"/><circle id="e793da3b-cee2-4a15-ae11-6dab45a6c728" data-name="Ellipse 263" cx="181.39939" cy="376.72401" r="5.604" fill="#fff"/><path d="M981.29873,366.93967H731.40591a5.00573,5.00573,0,0,1-5-5V314.83958h2v47.10009a3.00328,3.00328,0,0,0,3,3H981.29873a3.00328,3.00328,0,0,0,3-3V314.51048h2v47.42919A5.00573,5.00573,0,0,1,981.29873,366.93967Z" transform="translate(-113.2693 -156.48744)" fill="#3f3d56"/><rect x="371.39686" y="157.35214" width="587.21997" height="2" fill="#3f3d56"/><circle id="a67a4451-c7cc-402c-b29d-5a705f3c9418" data-name="Ellipse 264" cx="371.4394" cy="158.196" r="17.202" fill="#f50057"/><circle id="abdb3fbf-f68e-433e-a33f-153626b38c76" data-name="Ellipse 266" cx="546.24439" cy="158.196" r="17.202" fill="#f50057"/><circle id="ac293633-0933-4e21-a8aa-bc27ca4fbccc" data-name="Ellipse 268" cx="664.87641" cy="208.75701" r="17.202" fill="#3f3d56"/><circle id="a0cd768d-b738-4d4b-9ab3-78ab535c7573" data-name="Ellipse 269" cx="755.06336" cy="208.75701" r="17.202" fill="#ccc"/><circle id="b9eb3d2e-31e0-4fe2-be5c-79abb86bc227" data-name="Ellipse 270" cx="711.36035" cy="158.196" r="17.202" fill="#f50057"/><circle id="aa04baac-fce0-420a-b86a-4a97f3079928" data-name="Ellipse 271" cx="956.2594" cy="158.196" r="17.202" fill="#f50057"/><circle id="e92cf92c-058e-415c-ba96-766a57ee18d9" data-name="Ellipse 272" cx="872.02936" cy="158.196" r="17.202" fill="#f50057"/><rect id="ac5bf8cc-574d-4509-9338-881c836fd832" data-name="Rectangle 207" x="648.5394" width="31.90646" height="21.98984" fill="#3f3d56"/><rect id="ad5a043d-52f1-4931-b771-e4991ef7f7f7" data-name="Rectangle 208" x="355.61211" width="31.90646" height="21.98984" fill="#f50057"/><rect id="e5d95e83-bdd9-4322-95a9-5a9c4b449a8f" data-name="Rectangle 209" x="463.68483" width="31.90646" height="21.98984" fill="#ccc"/><path d="M538.05142,315.83958a1.00005,1.00005,0,0,1-1-1V265.47727a5.00573,5.00573,0,0,1,5-5h48.6748a1,1,0,0,1,0,2h-48.6748a3.00328,3.00328,0,0,0-3,3v49.36231A1.00006,1.00006,0,0,1,538.05142,315.83958Z" transform="translate(-113.2693 -156.48744)" fill="#3f3d56"/><circle id="b0a7c1c1-8f27-441f-a84a-e44462cc473e" data-name="Ellipse 265" cx="479.74439" cy="104.61599" r="17.202" fill="#e6e6e6"/><path d="M923.05142,314.83958h-2V265.47727a5.00573,5.00573,0,0,1,5-5h48.6748v2h-48.6748a3.00328,3.00328,0,0,0-3,3Z" transform="translate(-113.2693 -156.48744)" fill="#3f3d56"/><circle id="b3140cf1-cdb8-48ff-81af-ce41ed4f5739" data-name="Ellipse 265" cx="863.74439" cy="104.61599" r="17.202" fill="#e6e6e6"/></svg>



            </div>


            <div className="border-l-2 md:border-l-0 border-r-2 border-t-2 border-b-2 col-span-5 bg-white md:rounded-r-md">

            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white text-gray-800">
	<h1 className="text-2xl font-bold text-center">Login</h1>

	<form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
		<div className="space-y-1 text-sm">
			<label htmlFor="email" className="block text-gray-600">Username</label>
			<input {...register("email")} type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-100 text-gray-800 focus:border-emerald-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block text-gray-600">Password</label>
			<input {...register("password")} type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-100 text-gray-800 focus:border-emerald-600" />
			{/* <div className="flex justify-end text-xs text-gray-600">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div> */}
		</div>
		<button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-[#F50057]">Sign in</button>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
		<p className="px-3 text-sm text-gray-600">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
	</div>
	<div className="flex justify-center space-x-4">
		<button onClick={handleGoogleSignin}
          aria-label="Log in with Google" className="p-3 rounded-sm">
<svg width="30px" height="30px" viewBox="0 0 32 32" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path d="M23.75,16A7.7446,7.7446,0,0,1,8.7177,18.6259L4.2849,22.1721A13.244,13.244,0,0,0,29.25,16" fill="#00ac47"/><path d="M23.75,16a7.7387,7.7387,0,0,1-3.2516,6.2987l4.3824,3.5059A13.2042,13.2042,0,0,0,29.25,16" fill="#4285f4"/><path d="M8.25,16a7.698,7.698,0,0,1,.4677-2.6259L4.2849,9.8279a13.177,13.177,0,0,0,0,12.3442l4.4328-3.5462A7.698,7.698,0,0,1,8.25,16Z" fill="#ffba00"/><polygon fill="#2ab2db" points="8.718 13.374 8.718 13.374 8.718 13.374 8.718 13.374"/><path d="M16,8.25a7.699,7.699,0,0,1,4.558,1.4958l4.06-3.7893A13.2152,13.2152,0,0,0,4.2849,9.8279l4.4328,3.5462A7.756,7.756,0,0,1,16,8.25Z" fill="#ea4435"/><polygon fill="#2ab2db" points="8.718 18.626 8.718 18.626 8.718 18.626 8.718 18.626"/><path d="M29.25,15v1L27,19.5H16.5V14H28.25A1,1,0,0,1,29.25,15Z" fill="#4285f4"/></svg>
		</button>

	</div>
	<p className="text-xs text-center sm:px-6 text-gray-600">Do not have an account?
		<Link rel="noopener noreferrer" to="/signup" className="underline text-blue-800 ml-1">Sign up</Link>
	</p>
</div>

            </div>
            
        </div>
    );
};

export default SignIn;
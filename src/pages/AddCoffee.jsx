
const AddCoffee = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const chef = e.target.chef.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;

        const newCoffee = { name, chef, supplier, taste, category, details, photo }
        console.log(newCoffee)
      
    }


    return (
        <div className='lg:w-3/4 mx-auto'>
        <div className="text-center p-10">
            <h1 className="text-3xl font-rancho font-bold">Add Coffee!</h1>
        
        </div>
        <div className="card bg-[#f3f4f0] w-full shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
                {/* form first row */}
                <div className='flex flex-col lg:flex-row gap-5'>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="coffee name" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <input type="text" name='chef' placeholder="chef name" className="input input-bordered" required />
                    </div>
                </div>
                {/* form second row */}
                <div className='flex flex-col lg:flex-row gap-5'>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" name='supplier' placeholder="coffee supplier" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" name='taste' placeholder="taste name" className="input input-bordered" required />
                    </div>
                </div>
                {/* form third row */}
                <div className='flex flex-col lg:flex-row gap-5'>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name='category' placeholder="coffee Category" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name='details' placeholder="Coffee Details" className="input input-bordered" required />
                    </div>
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name='photo' placeholder="Photo url" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">
                    <button className="btn text-white hover:bg-[#331A15]  bg-[#331A15]">Add Coffee</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default AddCoffee;
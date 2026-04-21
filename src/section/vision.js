export default function Vision() {
    return(
        <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden py-20">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -ml-48 -mb-48"></div>
            
            <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col items-center gap-8 text-center">
                    {/* Title */}
                    <div className="w-full">
                        <p className="text-2xl font-semibold uppercase tracking-[0.3em] text-indigo-400 mb-2">Vision</p>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                            Transforming Nepal Through Faith
                        </h2>
                    </div>
                    
                    {/* Decorative line */}
                    <div className="h-1 w-16 bg-gradient-to-r from-indigo-400 to-violet-500"></div>
                    
                    {/* Description */}
                    <p className="w-full text-lg leading-relaxed text-slate-200 max-w-2xl">
                        To see the nation of Nepal progressively transformed by the Gospel of Jesus Christ—where individuals, families, and communities are renewed in heart and purpose, and where believers intentionally live out their faith across every sphere of society, influencing culture with integrity, compassion, and truth.
                    </p>
                </div>
            </div>
        </section>
    );
}
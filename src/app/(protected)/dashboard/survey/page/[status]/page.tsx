import SurveyFilter from "@/components/custom/SurveyFilter";

const SurveyDetails = async ({ params }: { params: Promise<{ status: string }> }) => {
    const { status } = await params;
    if (!status) {
        return <div>Survey not found</div>;
    }


    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">
                {status === "PENDING" ? "Pending Survey" : status === "ACCEPTED" ? "Accepted Survey" : status === "REJECTED" ? "Rejected Survey" : ""}
            </h1>
            {status ? (
                <SurveyFilter filter={["PENDING", "ACCEPTED", "REJECTED", ""].includes(status) ? (status as "PENDING" | "ACCEPTED" | "REJECTED" | "") : undefined} />
            ) : (
                <div className="flex justify-center items-center mt-10 mb-20">
                    <h1 className="text-2xl font-bold">Survey not found</h1>
                </div>
            )}
        </div>
    )
}

export default SurveyDetails
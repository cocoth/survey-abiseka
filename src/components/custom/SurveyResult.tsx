"use client";

import { HandleAcceptSurvey, HandleRejectSurvey } from "@/lib/services/surveyService";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { useState } from "react";

const SurveyResult = ({ data }: { data: SurveyWithUserAndStatus }) => {
    const [status, setStatus] = useState<string>(data.StatusSurvey?.status || "");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const acceptSurvey = async (id: string) => {
        setLoading(true);
        setError("");
        try {
            const res = await HandleAcceptSurvey(id);
            if (res && res.status === 200) {
                setStatus("ACCEPTED");
            } else {
                setError(res?.message || "Failed to accept survey.");
            }
        } catch (err) {
            setError("An error occurred while accepting the survey.");
        } finally {
            setLoading(false);
        }
    };

    const rejectSurvey = async (id: string) => {
        setLoading(true);
        setError("");
        try {
            const res = await HandleRejectSurvey(id);
            if (res && res.status === 200) {
                setStatus("REJECTED");
            } else {
                setError(res?.message || "Failed to reject survey.");
            }
        } catch (err) {
            setError("An error occurred while rejecting the survey.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <section className="flex flex-col gap-2 mb-4">
                <h1 className="flex gap-2 text-2xl">
                    Survey Result for:
                    <span className="font-bold">{data.User?.name || "Unknown User"}</span>
                </h1>
                <h2 className="flex gap-2 text-lg">
                    Universitas:
                    <span className="font-bold">{data.User?.Data_PT?.nama || "Unknown Institution"}</span>
                </h2>
                <h3 className="flex gap-2 text-lg">
                    Status:
                    <span
                        className={`font-bold ${status === "ACCEPTED"
                                ? "text-green-500"
                                : status === "REJECTED"
                                    ? "text-red-500"
                                    : "text-orange-300"
                            }`}
                    >
                        {status || data.StatusSurvey?.status || "PENDING"}
                    </span>
                </h3>
            </section>

            {error && (
                <div className="text-red-500 font-medium mb-4">
                    <p>{error}</p>
                </div>
            )}

            <Card className={`p-8 w-full ${status === "ACCEPTED" ? "bg-green-500/20" : status === "REJECTED" ? "bg-red-500/20" : "bg-orange-500/20"}`}>
                <div className="grid grid-cols-2 gap-4">
                    <section className="flex flex-col gap-3">
                        <p className="flex flex-col gap-1 font-bold">
                            Kecepatan Internet:
                            <span className="font-normal">{data.kecepatan_internet} Mb/s</span>
                        </p>
                        <p className="flex flex-col gap-1 font-bold">
                            Provider Internet:
                            <span className="font-normal">{data.provider_internet}</span>
                        </p>
                        <p className="flex flex-col gap-1 font-bold">
                            Jenis Internet:
                            <span className="font-normal">{data.jenis_internet}</span>
                        </p>
                    </section>

                    <section className="flex flex-col gap-3">
                        <p className="flex flex-col gap-1 font-bold">
                            Jumlah Laboratorium komputer:
                            <span className="font-normal">{data.jumlah_laboratorium}</span>
                        </p>
                        <p className="flex flex-col gap-1 font-bold">
                            Jenis Laboratorium:
                            <span className="font-normal">{data.jenis_laboratorium}</span>
                        </p>
                        <p className="flex flex-col gap-1 font-bold">
                            Pendinginan Laboratorium:
                            <span className="font-normal">{data.pendinginan_laboratorium}</span>
                        </p>
                    </section>

                    <section className="flex flex-col gap-1 mt-10">
                        <p className="flex flex-col gap-1 font-bold">
                            Jumlah komputer:
                            <span className="font-normal">{data.jumlah_komputer}</span>
                        </p>
                        <p className="flex flex-col gap-1 font-bold">
                            Jenis komputer:
                            <span className="font-normal">{data.jenis_komputer}</span>
                        </p>
                        <p className="flex flex-col gap-1 font-bold">
                            Spesifikasi komputer:
                            <span className="font-normal">{data.spesifikasi_komputer}</span>
                        </p>
                    </section>
                </div>

                <div className="flex justify-end items-center my-4 gap-4">
                    <Button
                        onClick={() => rejectSurvey(data.id)}
                        className="bg-red-500 text-white hover:bg-red-600 cursor-pointer"
                        disabled={loading || status === "REJECTED"}
                    >
                        {loading && status === "REJECTED" ? "Processing..." : "Reject Survey"}
                    </Button>
                    <Button
                        onClick={() => acceptSurvey(data.id)}
                        className="bg-green-500 text-white hover:bg-green-600 cursor-pointer"
                        disabled={loading || status === "ACCEPTED"}
                    >
                        {loading && status === "ACCEPTED" ? "Processing..." : "Accept Survey"}
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default SurveyResult;
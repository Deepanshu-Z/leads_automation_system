"use client";

import {

  useParams

} from "next/navigation";

import {

  useState

} from "react";

import {

  useQuery

} from "@tanstack/react-query";


export default function LeadPage() {

  const params =
    useParams();

  const leadId =
    params.id as string;

  const [message, setMessage] =
    useState("");

  // =====================================
  // FETCH LEAD
  // =====================================

  const {

    data: lead

  } = useQuery({

    queryKey: [

      "lead",

      leadId
    ],

    queryFn: async () => {

      const res =
        await fetch(

          `/api/leads/${leadId}`
        );

      return res.json();
    }
  });

  // =====================================
  // FETCH MESSAGES
  // =====================================

  const {

    data: messages

  } = useQuery({

    queryKey: [

      "messages",

      leadId
    ],

    queryFn: async () => {

      const res =
        await fetch(

          `/api/leads/${leadId}/messages`
        );

      return res.json();
    },

    refetchInterval:
      5000
  });

  // =====================================
  // TAKEOVER
  // =====================================

  async function takeover() {

    await fetch(

      `/api/leads/${leadId}/takeover`,

      {
        method: "POST"
      }
    );
  }

  // =====================================
  // REENABLE AI
  // =====================================

  async function reenableAI() {

    await fetch(

      `/api/leads/${leadId}/reenable-ai`,

      {
        method: "POST"
      }
    );
  }

  // =====================================
  // SEND MESSAGE
  // =====================================

  async function sendMessage() {

    if (!message) return;

    await fetch(

      `/api/leads/${leadId}/reply`,

      {

        method: "POST",

        headers: {

          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({

          message
        })
      }
    );

    setMessage("");
  }

  // =====================================
  // CLOSE LEAD
  // =====================================

  async function closeLead() {

    await fetch(

      `/api/escalations/${leadId}/resolve`,

      {
        method: "POST"
      }
    );
  }

  if (!lead) {

    return (
      <div>
        Loading...
      </div>
    );
  }

  return (

    <div className="p-6">

      {/* ================================= */}
      {/* LEAD INFO */}
      {/* ================================= */}

      <div className="border rounded-xl p-5 mb-6">

        <h1 className="text-2xl font-bold">

          {lead.name}

        </h1>

        <div>
          {lead.email}
        </div>

        <div>
          {lead.phone}
        </div>

        <div>
          {lead.platform}
        </div>

        <div>
          {lead.status}
        </div>

        <div>

          Agent:

          {
            lead.assignedAgent
              ?.name ||

            "Unassigned"
          }

        </div>
      </div>

      {/* ================================= */}
      {/* ACTIONS */}
      {/* ================================= */}

      <div className="flex gap-4 mb-6">

        <button

          onClick={takeover}

          className="
            bg-orange-500
            text-white
            px-4
            py-2
          "
        >

          Take Over

        </button>

        <button

          onClick={reenableAI}

          className="
            bg-blue-500
            text-white
            px-4
            py-2
          "
        >

          Re-enable AI

        </button>

        <button

          onClick={closeLead}

          className="
            bg-red-500
            text-white
            px-4
            py-2
          "
        >

          Mark Closed

        </button>
      </div>

      {/* ================================= */}
      {/* CHAT */}
      {/* ================================= */}

      <div className="space-y-4">

        {messages?.map(
          (msg: any) => (

            <div

              key={msg.id}

              className={

                `
                max-w-xl
                p-4
                rounded-xl

                ${
                  msg.role === "USER"
                    ? "bg-gray-200 mr-auto"

                    : msg.role === "AI"
                    ? "bg-blue-500 text-white ml-auto"

                    : "bg-green-500 text-white ml-auto"
                }
                `
              }
            >

              <div>

                {msg.content}

              </div>

              {msg.role === "AI" && (

                <div className="mt-2 text-sm">

                  <span>

                    Intent:
                    {msg.intent}

                  </span>

                  <span className="ml-3">

                    Confidence:
                    {msg.confidence}

                  </span>

                </div>
              )}

            </div>
          )
        )}
      </div>

      {/* ================================= */}
      {/* SEND BOX */}
      {/* ================================= */}

      <div className="flex gap-3 mt-6">

        <input

          value={message}

          onChange={(e) =>
            setMessage(
              e.target.value
            )
          }

          className="
            border
            flex-1
            p-3
          "

          placeholder="
            Type message...
          "
        />

        <button

          onClick={sendMessage}

          className="
            bg-black
            text-white
            px-6
          "
        >

          Send

        </button>
      </div>
    </div>
  );
}
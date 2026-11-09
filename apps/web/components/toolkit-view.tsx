"use client";

import { useCallback, useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { LessonSidebar } from "@/components/lesson-sidebar";
import { LocalStorageBanner } from "@/components/local-storage-banner";
import { ButtonLink } from "@/components/ui-button";
import { DisabledButton } from "@/components/ui-button";
import { useGatewayStore } from "@/components/gateway-store";
import {
  downloadTextFile,
  exportToolkitJson,
  exportToolkitMarkdown,
} from "@/lib/export-toolkit";
import { gatewayCourse } from "@/lib/gateway-course";
import { gatewayPath } from "@/lib/paths";
import {
  BRIEF_HEADINGS,
  COMPLETION_CHECKLIST_ITEMS,
  type BriefRow,
  type SourceLogRow,
} from "@/lib/toolkit-types";

export function ToolkitView() {
  const { state, updateToolkit, resetAll, storageAvailable, storageStatus } =
    useGatewayStore();
  const toolkit = state.toolkit;
  const [resetArmed, setResetArmed] = useState(false);

  const setBrief = useCallback(
    (index: number, answer: string) => {
      const brief = toolkit.brief.map((row, i) =>
        i === index ? { ...row, answer } : row
      );
      updateToolkit({ brief });
    },
    [toolkit.brief, updateToolkit]
  );

  const setSourceRow = useCallback(
    (index: number, patch: Partial<SourceLogRow>) => {
      const sourceLog = toolkit.sourceLog.map((row, i) =>
        i === index ? { ...row, ...patch } : row
      );
      updateToolkit({ sourceLog });
    },
    [toolkit.sourceLog, updateToolkit]
  );

  const onExportMd = () => {
    downloadTextFile(
      "personal-ai-toolkit.md",
      exportToolkitMarkdown(state),
      "text/markdown;charset=utf-8"
    );
  };

  const onExportJson = () => {
    downloadTextFile(
      "personal-ai-toolkit.json",
      exportToolkitJson(state),
      "application/json;charset=utf-8"
    );
  };

  const onReset = () => {
    if (!resetArmed) {
      setResetArmed(true);
      return;
    }
    resetAll();
    setResetArmed(false);
  };

  return (
    <>
      <SiteNav
        breadcrumb={`${gatewayCourse.title} · Personal AI Toolkit`}
        action={
          <ButtonLink href={gatewayPath()} variant="ghost">
            Course overview
          </ButtonLink>
        }
      />
      <div className="lesson-layout" id="main">
        <LessonSidebar currentSlug="" />
        <article className="lesson-main">
          <p className="draft-banner" role="status">
            Review draft toolkit — mirrors courses/gateway/toolkit.md
          </p>
          <LocalStorageBanner />
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-3xl)",
            }}
          >
            Personal AI Toolkit
          </h1>
          <p className="lede">
            Fill sections as you complete lessons. Export downloads a file on
            this device only—nothing is uploaded.
          </p>

          <section>
            <h2 className="lesson-h2">1. Plain-language card</h2>
            <ToolkitField
              label="Who this tool is for, in my case"
              value={toolkit.plainLanguageCard.whoFor}
              onChange={(whoFor) =>
                updateToolkit({ plainLanguageCard: { ...toolkit.plainLanguageCard, whoFor } })
              }
            />
            <ToolkitField
              label="Why I might use it"
              value={toolkit.plainLanguageCard.whyUse}
              onChange={(whyUse) =>
                updateToolkit({ plainLanguageCard: { ...toolkit.plainLanguageCard, whyUse } })
              }
            />
            <ToolkitField
              label="How an answer appears"
              value={toolkit.plainLanguageCard.howAnswer}
              onChange={(howAnswer) =>
                updateToolkit({
                  plainLanguageCard: { ...toolkit.plainLanguageCard, howAnswer },
                })
              }
            />
            <ToolkitField
              label="What it is not"
              value={toolkit.plainLanguageCard.whatNot}
              onChange={(whatNot) =>
                updateToolkit({ plainLanguageCard: { ...toolkit.plainLanguageCard, whatNot } })
              }
            />
            <ToolkitField
              label="My one goal for this course"
              value={toolkit.plainLanguageCard.oneGoal}
              onChange={(oneGoal) =>
                updateToolkit({ plainLanguageCard: { ...toolkit.plainLanguageCard, oneGoal } })
              }
            />
          </section>

          <section>
            <h2 className="lesson-h2">2. Ten reusable prompts</h2>
            {toolkit.promptLibrary.map((prompt, index) => (
              <ToolkitField
                key={index}
                label={`Prompt ${index + 1}`}
                value={prompt}
                onChange={(value) => {
                  const promptLibrary = [...toolkit.promptLibrary];
                  promptLibrary[index] = value;
                  updateToolkit({ promptLibrary });
                }}
                rows={3}
              />
            ))}
          </section>

          <section>
            <h2 className="lesson-h2">3. Brief worksheet</h2>
            {toolkit.brief.map((row: BriefRow, index: number) => (
              <ToolkitField
                key={row.heading}
                label={row.heading}
                value={row.answer}
                onChange={(answer) => setBrief(index, answer)}
              />
            ))}
            <p className="field-note">
              Headings follow course script ({BRIEF_HEADINGS.length} rows).
            </p>
          </section>

          <section>
            <h2 className="lesson-h2">4. Draft worksheets</h2>
            {(["post", "email", "description"] as const).map((kind) => (
              <DraftBlock
                key={kind}
                title={kind.charAt(0).toUpperCase() + kind.slice(1)}
                draft={toolkit.drafts[kind]}
                onChange={(patch) =>
                  updateToolkit({
                    drafts: {
                      ...toolkit.drafts,
                      [kind]: { ...toolkit.drafts[kind], ...patch },
                    },
                  })
                }
              />
            ))}
          </section>

          <section>
            <h2 className="lesson-h2">5. Claim and source log</h2>
            <p className="field-note">
              Copy addresses from pages you opened. The tool does not tick the
              last column—you do.
            </p>
            {toolkit.sourceLog.map((row, index) => (
              <div key={index} className="card card--flat source-row">
                <p className="eyebrow">Row {index + 1}</p>
                <ToolkitField
                  label="Claim in the summary"
                  value={row.claim}
                  onChange={(claim) => setSourceRow(index, { claim })}
                />
                <ToolkitField
                  label="Source title I copied"
                  value={row.sourceTitle}
                  onChange={(sourceTitle) => setSourceRow(index, { sourceTitle })}
                />
                <ToolkitField
                  label="Address I copied from the browser"
                  value={row.address}
                  onChange={(address) => setSourceRow(index, { address })}
                />
                <ToolkitField
                  label="What the page says, in my words"
                  value={row.pageSays}
                  onChange={(pageSays) => setSourceRow(index, { pageSays })}
                />
                <label className="field-label" htmlFor={`match-${index}`}>
                  Match?
                </label>
                <select
                  id={`match-${index}`}
                  className="field-select"
                  value={row.match}
                  onChange={(e) =>
                    setSourceRow(index, {
                      match: e.target.value as SourceLogRow["match"],
                    })
                  }
                >
                  <option value="">Choose…</option>
                  <option value="matches">Matches</option>
                  <option value="does-not-match">Does not match</option>
                  <option value="not-on-page">Not on the page</option>
                </select>
                <ToolkitField
                  label="I checked (initials and date)"
                  value={row.checkedBy}
                  onChange={(checkedBy) => setSourceRow(index, { checkedBy })}
                />
              </div>
            ))}
          </section>

          <section>
            <h2 className="lesson-h2">6. Do-not-paste checklist</h2>
            <ToolkitField
              label="Secrets I will not paste"
              value={toolkit.doNotPaste.secrets}
              onChange={(secrets) =>
                updateToolkit({ doNotPaste: { ...toolkit.doNotPaste, secrets } })
              }
              rows={3}
            />
            <ToolkitField
              label="Other people's private records"
              value={toolkit.doNotPaste.othersRecords}
              onChange={(othersRecords) =>
                updateToolkit({ doNotPaste: { ...toolkit.doNotPaste, othersRecords } })
              }
              rows={2}
            />
            <ToolkitField
              label="Faces, voices, likeness"
              value={toolkit.doNotPaste.likeness}
              onChange={(likeness) =>
                updateToolkit({ doNotPaste: { ...toolkit.doNotPaste, likeness } })
              }
              rows={2}
            />
            <ToolkitField
              label="Work I do not have rights to upload"
              value={toolkit.doNotPaste.noRights}
              onChange={(noRights) =>
                updateToolkit({ doNotPaste: { ...toolkit.doNotPaste, noRights } })
              }
              rows={2}
            />
            <ToolkitField
              label="How I show a draft is mine"
              value={toolkit.doNotPaste.showDraftMine}
              onChange={(showDraftMine) =>
                updateToolkit({ doNotPaste: { ...toolkit.doNotPaste, showDraftMine } })
              }
              rows={2}
            />
            <ToolkitField
              label="Who approves before send/post/purchase"
              value={toolkit.doNotPaste.whoApproves}
              onChange={(whoApproves) =>
                updateToolkit({ doNotPaste: { ...toolkit.doNotPaste, whoApproves } })
              }
            />
            <CheckRow
              label="Applied to my brief"
              value={toolkit.doNotPaste.appliedBrief}
              onChange={(appliedBrief) =>
                updateToolkit({
                  doNotPaste: { ...toolkit.doNotPaste, appliedBrief },
                })
              }
            />
            <CheckRow
              label="Applied to post, email, description"
              value={toolkit.doNotPaste.appliedDrafts}
              onChange={(appliedDrafts) =>
                updateToolkit({
                  doNotPaste: { ...toolkit.doNotPaste, appliedDrafts },
                })
              }
            />
          </section>

          <section>
            <h2 className="lesson-h2">7. Weekly task map</h2>
            {(
              [
                ["trigger", "Trigger (what starts the task)"],
                ["input", "Input (what I gather)"],
                ["action", "Action (what I ask a chat tool to do)"],
                ["humanApproval", "Human approval (a person before anything leaves)"],
                ["errorHandling", "Error handling"],
              ] as const
            ).map(([key, label]) => (
              <ToolkitField
                key={key}
                label={label}
                value={toolkit.weeklyMap[key]}
                onChange={(value) =>
                  updateToolkit({
                    weeklyMap: { ...toolkit.weeklyMap, [key]: value },
                  })
                }
              />
            ))}
            <label className="field-label">
              <input
                type="checkbox"
                checked={toolkit.weeklyMap.notConnectedConfirm}
                onChange={(e) =>
                  updateToolkit({
                    weeklyMap: {
                      ...toolkit.weeklyMap,
                      notConnectedConfirm: e.target.checked,
                    },
                  })
                }
              />{" "}
              I did not connect this map to email, files, or payments.
            </label>
            <label className="field-label" htmlFor="interest">
              Optional interest (local only—not enrolment)
            </label>
            <select
              id="interest"
              className="field-select"
              value={toolkit.weeklyMap.optionalInterest}
              onChange={(e) =>
                updateToolkit({
                  weeklyMap: {
                    ...toolkit.weeklyMap,
                    optionalInterest: e.target
                      .value as typeof toolkit.weeklyMap.optionalInterest,
                  },
                })
              }
            >
              <option value="">Choose or leave blank…</option>
              <option value="video">Video course (not available)</option>
              <option value="website">Website course (not available)</option>
              <option value="automation">Automation course (not available)</option>
              <option value="not-yet">Not yet</option>
            </select>
            <p className="field-note">
              Interest stays on this device. No signup is sent.
            </p>
          </section>

          <section>
            <h2 className="lesson-h2">8. Personal completion checklist</h2>
            <ul className="checklist">
              {COMPLETION_CHECKLIST_ITEMS.map((item) => (
                <li key={item.key}>
                  <label>
                    <input
                      type="checkbox"
                      checked={Boolean(toolkit.completionChecklist[item.key])}
                      onChange={(e) =>
                        updateToolkit({
                          completionChecklist: {
                            ...toolkit.completionChecklist,
                            [item.key]: e.target.checked,
                          },
                        })
                      }
                    />{" "}
                    {item.label}
                  </label>
                </li>
              ))}
            </ul>
            <p className="field-note">Not a certificate or job credential.</p>
          </section>

          <section className="card">
            <h2 className="lesson-h2">Export and reset</h2>
            <p className="field-note">
              Downloads reflect this tab&apos;s worksheet (including in-memory
              edits).{" "}
              {storageStatus === "memory-only" || storageStatus === "unavailable"
                ? "Browser storage is not saving—export if you need a copy."
                : "Browser storage does not replace export."}
            </p>
            <ButtonRow>
              <button type="button" className="btn btn--primary" onClick={onExportMd}>
                Download Markdown
              </button>
              <button type="button" className="btn btn--secondary" onClick={onExportJson}>
                Download JSON
              </button>
            </ButtonRow>
            {storageAvailable ? (
              <ButtonRow>
                <button
                  type="button"
                  className={`btn ${resetArmed ? "btn--inverse" : "btn--ghost"}`}
                  onClick={onReset}
                >
                  {resetArmed
                    ? "Confirm reset all toolkit and progress"
                    : "Reset all saved data on this device"}
                </button>
                {resetArmed ? (
                  <button
                    type="button"
                    className="btn btn--ghost"
                    onClick={() => setResetArmed(false)}
                  >
                    Cancel
                  </button>
                ) : null}
              </ButtonRow>
            ) : (
              <p className="field-note">Reset unavailable without storage.</p>
            )}
            <DisabledButton
              variant="ghost"
              reason="Cloud save and accounts are not available"
            >
              Save to cloud (unavailable)
            </DisabledButton>
          </section>

          <section className="card card--warn">
            <p className="eyebrow eyebrow--warn">FREE vs PAID tools</p>
            <p>
              <strong>FREE (this prototype):</strong> reading lessons, worksheets,
              local save, export to your device.
            </p>
            <p>
              <strong>PAID / unverified:</strong> external chat or video tools you
              choose to open—costs are yours and are not verified here. Course
              tuition: free; checkout not enabled.
            </p>
          </section>
        </article>
      </div>
    </>
  );
}

function ToolkitField({
  label,
  value,
  onChange,
  rows = 2,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  const id = label.replace(/\W+/g, "-").toLowerCase().slice(0, 40);
  return (
    <FieldBlock>
      <label className="field-label" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        className="field-textarea"
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </FieldBlock>
  );
}

function CheckRow({
  label,
  value,
  onChange,
}: {
  label: string;
  value: "" | "yes" | "not-yet";
  onChange: (v: "" | "yes" | "not-yet") => void;
}) {
  return (
    <FieldBlock>
      <label className="field-label">{label}</label>
      <select
        className="field-select"
        value={value}
        onChange={(e) => onChange(e.target.value as "" | "yes" | "not-yet")}
      >
        <option value="">—</option>
        <option value="yes">Yes</option>
        <option value="not-yet">Not yet</option>
      </select>
    </FieldBlock>
  );
}

function DraftBlock({
  title,
  draft,
  onChange,
}: {
  title: string;
  draft: { firstDraft: string; whatChanged: string; final: string };
  onChange: (patch: Partial<typeof draft>) => void;
}) {
  return (
    <div className="card card--flat">
      <h3 style={{ fontFamily: "var(--font-display)" }}>{title}</h3>
      <ToolkitField
        label="First draft"
        value={draft.firstDraft}
        onChange={(firstDraft) => onChange({ firstDraft })}
        rows={3}
      />
      <ToolkitField
        label="What I changed"
        value={draft.whatChanged}
        onChange={(whatChanged) => onChange({ whatChanged })}
        rows={2}
      />
      <ToolkitField
        label="Final"
        value={draft.final}
        onChange={(final) => onChange({ final })}
        rows={3}
      />
      <p className="field-note">Sent / posted: No.</p>
    </div>
  );
}

function ButtonRow({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        margin: "12px 0",
      }}
    >
      {children}
    </div>
  );
}

function FieldBlock({ children }: { children: React.ReactNode }) {
  return <div style={{ marginBottom: "16px" }}>{children}</div>;
}

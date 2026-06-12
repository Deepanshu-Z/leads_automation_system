-- CreateIndex
CREATE INDEX "AuditLog_leadId_idx" ON "AuditLog"("leadId");

-- CreateIndex
CREATE INDEX "Conversation_leadId_idx" ON "Conversation"("leadId");

-- CreateIndex
CREATE INDEX "Conversation_status_idx" ON "Conversation"("status");

-- CreateIndex
CREATE INDEX "EscalationLog_leadId_idx" ON "EscalationLog"("leadId");

-- CreateIndex
CREATE INDEX "Lead_phone_idx" ON "Lead"("phone");

-- CreateIndex
CREATE INDEX "Lead_email_idx" ON "Lead"("email");

-- CreateIndex
CREATE INDEX "Lead_status_idx" ON "Lead"("status");

-- CreateIndex
CREATE INDEX "Notification_agentId_idx" ON "Notification"("agentId");

-- CreateIndex
CREATE INDEX "Notification_leadId_idx" ON "Notification"("leadId");

-- CreateIndex
CREATE INDEX "Notification_isRead_idx" ON "Notification"("isRead");
